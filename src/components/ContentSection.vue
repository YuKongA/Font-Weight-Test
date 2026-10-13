<script setup>
defineProps({
  id: { type: String, required: true },
  number: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<template>
  <section class="section" :aria-labelledby="id">
    <div class="section-head">
      <div class="section-title">
        <span class="section-number">{{ number }}</span>
        <h2 :id="id">{{ title }}</h2>
      </div>
      <div v-if="$slots.actions" class="section-actions">
        <slot name="actions" />
      </div>
    </div>
    <slot />
  </section>
</template>
