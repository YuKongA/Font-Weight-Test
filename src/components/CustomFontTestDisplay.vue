<script setup>
import { computed, ref } from 'vue';
import PreviewSelect from './PreviewSelect.vue';
import { sampleText, fontOptions, languageOptions } from '../data/fonts';

const initialSize = matchMedia('(max-width: 480px)').matches ? 42 : 72;
const weight = ref(400);
const size = ref(initialSize);
const family = ref('sans-serif');
const text = ref(sampleText);
const language = ref('en');
const sampleStyle = computed(() => ({
  fontWeight: weight.value,
  fontVariationSettings: family.value === 'MiSans' ? `'wght' ${weight.value}` : undefined,
  fontSize: size.value + 'px',
  fontFamily: family.value === 'MiSans' ? '"MiSans", sans-serif' : family.value,
}));
const weightStyle = computed(() => ({ '--fill': ((weight.value - 1) / 998 * 100) + '%' }));
const sizeStyle = computed(() => ({ '--fill': ((size.value - 20) / 80 * 100) + '%' }));

function reset() {
  weight.value = 400;
  size.value = initialSize;
  family.value = 'sans-serif';
  text.value = sampleText;
  language.value = 'en';
}
defineExpose({ reset });
</script>

<template>
  <div class="panel playground">
    <div class="preview-canvas">
      <p id="sample-text" class="preview-text" :lang="language" :style="sampleStyle">{{ text }}</p>
    </div>
    <div class="playground-controls">
      <div class="sliders">
        <div><label class="control-label" for="weight">字重<output id="weight-value" for="weight">{{ weight
              }}</output></label><input id="weight" v-model.number="weight" type="range" min="1" max="999" step="1"
            :style="weightStyle"></div>
        <div><label class="control-label" for="size">字号<output id="size-value" for="size">{{ size }}
              px</output></label><input id="size" v-model.number="size" type="range" min="20" max="100" step="1"
            :style="sizeStyle"></div>
      </div>
      <div class="text-field"><label for="test-text">文本</label><textarea id="test-text" v-model="text" rows="1"
          placeholder="输入你想观察的文字…"></textarea></div>
      <div class="playground-selects">
        <PreviewSelect id="font-family" v-model="family" label="字体" :options="fontOptions" />
        <PreviewSelect id="sample-language" v-model="language" label="字形" :options="languageOptions" />
      </div>
    </div>
  </div>
</template>
