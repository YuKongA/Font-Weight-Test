<script setup>
import { ref } from 'vue';
import ContentSection from '../components/ContentSection.vue';
import WeightMapping from '../components/WeightMapping.vue';
import FontComparisonDisplay from '../components/FontComparisonDisplay.vue';
import CJKCharacterDisplay from '../components/CJKCharacterDisplay.vue';
import CustomFontTestDisplay from '../components/CustomFontTestDisplay.vue';
import UiIcon from '../components/UiIcon.vue';

const playgroundRef = ref(null);
</script>

<template>
  <div class="dashboard">
    <ContentSection id="weight-mapping" number="01" title="常用字重"><WeightMapping /></ContentSection>
    <ContentSection id="weight-comparison" number="02" title="字重对照"><FontComparisonDisplay /></ContentSection>
    <ContentSection id="glyph-comparison" number="03" title="同字异形"><CJKCharacterDisplay /></ContentSection>
    <ContentSection id="font-playground" number="04" title="自由试字">
      <template #actions>
        <button id="reset" class="icon-button control-icon" type="button" aria-label="重置" title="重置" @click="playgroundRef?.reset">
          <UiIcon name="reset" />
        </button>
      </template>
      <CustomFontTestDisplay ref="playgroundRef" />
    </ContentSection>
  </div>
</template>
