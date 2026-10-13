<script setup>
import { weights, comparisonSamples } from '../data/fonts';
import { comparisonSelection } from '../composables/usePreviewSettings';
import WeightComparisonMatrix from './WeightComparisonMatrix.vue';
</script>

<template>
  <div class="comparison-board">
    <div class="comparison-tools">
      <div class="comparison-options content-tabs" role="group" aria-label="对照字形">
        <button v-for="(sample, key) in comparisonSamples" :key="key" type="button" :data-comparison="key" :aria-pressed="comparisonSelection === key" @click="comparisonSelection = key">{{ sample.label }}</button>
      </div>
    </div>
    <div class="comparison-wide"><WeightComparisonMatrix :weights="weights" :text="comparisonSamples[comparisonSelection].text" /></div>
    <div class="comparison-narrow">
      <WeightComparisonMatrix :weights="weights.slice(0, 6)" :text="comparisonSamples[comparisonSelection].text" />
      <WeightComparisonMatrix :weights="weights.slice(6)" :text="comparisonSamples[comparisonSelection].text" />
    </div>
  </div>
</template>
