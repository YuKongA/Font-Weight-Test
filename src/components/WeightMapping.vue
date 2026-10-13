<script setup>
import { ref } from 'vue';
import { weightDefinitions, sampleText } from '../data/fonts';
import { useWeightNameLayout } from '../composables/useWeightNameLayout';

const table = ref(null);
useWeightNameLayout(table);
</script>

<template>
  <div class="panel mapping-panel">
    <table ref="table" class="weight-table">
      <thead><tr><th scope="col">字重</th><th scope="col">名称</th><th scope="col">样本</th></tr></thead>
      <tbody>
        <tr v-for="item in weightDefinitions" :key="item.weight" :class="{ featured: item.weight === 400 }">
          <td>{{ item.weight }}</td>
          <td>{{ item.name }}<span class="english-name" lang="en"><span class="weight-name">{{ item.english }}</span><template v-if="item.alias">{{ ' ' }}<span class="weight-name">/ {{ item.alias }}</span></template></span></td>
          <td :style="{ fontWeight: item.weight }" lang="en">{{ sampleText }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
