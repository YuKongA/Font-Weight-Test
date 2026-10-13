<script setup>
import ContentSection from '../components/ContentSection.vue';
import WeightSamples from '../components/WeightSamples.vue';
import FontMoreDisplay from '../components/FontMoreDisplay.vue';
defineProps({ family: { type: String, required: true } });
</script>

<template>
  <div class="page-stack">
    <ContentSection id="specimen-weights" number="01" title="正体与斜体">
      <div class="split-panels"><WeightSamples :family="family" /><WeightSamples :family="family" italic /></div>
    </ContentSection>
    <ContentSection id="specimen-reading" number="02" title="段落与字符">
      <FontMoreDisplay :family="family" />
    </ContentSection>
  </div>
</template>
