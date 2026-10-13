<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  options: { type: Array, required: true },
});
const emit = defineEmits(['update:modelValue']);
const root = ref(null);
const trigger = ref(null);
const menu = ref(null);
const opened = ref(false);
const upwards = ref(false);
const maxHeight = ref(280);
const activeIndex = ref(0);
const selectedIndex = computed(() => Math.max(0, props.options.findIndex(option => option.value === props.modelValue)));
const selectedLabel = computed(() => props.options[selectedIndex.value]?.label ?? props.modelValue);
let search = '';
let lastSearch = 0;

function highlight(index) {
  activeIndex.value = Math.max(0, Math.min(props.options.length - 1, index));
  nextTick(() => {
    const list = menu.value;
    const option = list?.children[activeIndex.value];
    if (!opened.value || !option) return;
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop;
    else if (option.offsetTop + option.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = option.offsetTop + option.offsetHeight - list.clientHeight;
  });
}
function open() {
  const rect = trigger.value.getBoundingClientRect();
  const below = innerHeight - rect.bottom - 12;
  const above = rect.top - 12;
  upwards.value = below < 200 && above > below;
  maxHeight.value = Math.min(280, Math.max(96, upwards.value ? above : below));
  opened.value = true;
  search = '';
  highlight(selectedIndex.value);
}
function close(focus = false) {
  opened.value = false;
  if (focus) trigger.value?.focus({ preventScroll: true });
}
function choose(index) {
  emit('update:modelValue', props.options[index].value);
  close(true);
}
function onKeydown(event) {
  if (event.key === 'Tab') { close(); return; }
  if (event.key === 'Escape') {
    if (opened.value) { event.preventDefault(); close(true); }
    return;
  }
  if (['Enter', ' '].includes(event.key)) {
    event.preventDefault();
    if (opened.value) choose(activeIndex.value); else open();
  } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const wasClosed = !opened.value;
    if (wasClosed) open();
    if (event.key === 'Home') highlight(0);
    else if (event.key === 'End') highlight(props.options.length - 1);
    else if (!wasClosed) highlight(activeIndex.value + (event.key === 'ArrowDown' ? 1 : -1));
  } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    if (!opened.value) open();
    const now = performance.now();
    search = now - lastSearch > 600 || search === event.key.toLowerCase() ? event.key.toLowerCase() : search + event.key.toLowerCase();
    lastSearch = now;
    const next = props.options.map((_, index) => (activeIndex.value + index + 1) % props.options.length)
      .find(index => props.options[index].label.toLowerCase().startsWith(search) || props.options[index].value.toLowerCase().startsWith(search));
    if (next !== undefined) highlight(next);
  }
}
function onOutsidePointer(event) {
  if (!root.value?.contains(event.target)) close();
}
function onFocusout(event) {
  if (!root.value?.contains(event.relatedTarget)) close();
}
function onResize() { close(); }
watch(() => props.modelValue, () => { if (opened.value) highlight(selectedIndex.value); });
onMounted(() => {
  document.addEventListener('pointerdown', onOutsidePointer);
  window.addEventListener('resize', onResize);
});
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onOutsidePointer);
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <div ref="root" class="field-inline" @focusout="onFocusout">
    <label :id="id + '-label'" :for="id + '-trigger'">{{ label }}</label>
    <div class="select-control" :class="{ 'opens-up': upwards }" :data-select="id">
      <select :id="id" :value="modelValue" hidden @change="emit('update:modelValue', $event.target.value)">
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
      <button :id="id + '-trigger'" ref="trigger" class="select-trigger" type="button" role="combobox" aria-haspopup="listbox" :aria-expanded="opened" :aria-controls="id + '-menu'" :aria-labelledby="id + '-label ' + id + '-value'" :aria-activedescendant="opened ? id + '-option-' + activeIndex : undefined" @click="opened ? close() : open()" @keydown="onKeydown">
        <span :id="id + '-value'" class="select-value">{{ selectedLabel }}</span><span class="select-chevron" aria-hidden="true"></span>
      </button>
      <div :id="id + '-menu'" ref="menu" class="select-menu" role="listbox" :aria-labelledby="id + '-label'" :hidden="!opened" :style="{ maxHeight: maxHeight + 'px' }" @pointerdown.prevent>
        <div v-for="(option, index) in options" :id="id + '-option-' + index" :key="option.value" class="select-option" :class="{ 'is-active': index === activeIndex }" role="option" :data-value="option.value" :aria-selected="modelValue === option.value" @pointermove="highlight(index)" @click="choose(index)">
          <span>{{ option.label }}</span><code>{{ option.detail ?? option.value }}</code><span class="select-check" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </div>
</template>
