<script setup>
import { weights, fullSampleText } from '../data/fonts';
defineProps({ family: { type: String, required: true }, italic: Boolean });
</script>

<template>
  <div class="panel sample-panel" :class="{ italic }">
    <div class="sample-heading"><strong>{{ italic ? '斜体 / Italic' : '正体 / Upright' }}</strong><span>{{ family }}</span></div>
    <div v-for="weight in weights" :key="weight" class="sample-row" :class="{ 'standard-weight': weight === 400 }">
      <span>{{ weight }}</span><span lang="en" :style="{ fontFamily: family, fontWeight: weight }">{{ fullSampleText }}</span>
    </div>
  </div>
</template>
