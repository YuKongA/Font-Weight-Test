<script setup>
defineProps({
  weights: { type: Array, required: true },
  text: { type: String, required: true },
});
const sources = [
  { label: '设备', name: 'sans-serif', family: 'sans-serif' },
  { label: '参考', name: 'MiSans', family: '"MiSans", sans-serif' },
];
</script>

<template>
  <table class="comparison-matrix">
    <colgroup>
      <col class="matrix-source-column">
      <col v-for="weight in weights" :key="weight">
    </colgroup>
    <thead>
      <tr>
        <th scope="col"><span class="matrix-axis">字重</span></th>
        <th v-for="weight in weights" :key="weight" scope="col" :class="{ 'standard-weight': weight === 400 }">{{ weight
          }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="source in sources" :key="source.name">
        <th scope="row"><strong>{{ source.label }}</strong><span>{{ source.name }}</span></th>
        <td v-for="weight in weights" :key="weight" class="comparison-glyph" lang="en"
          :style="{ fontFamily: source.family, fontWeight: weight, fontVariationSettings: source.name === 'MiSans' ? '\'wght\' ' + weight : undefined }">
          {{ text }}</td>
      </tr>
    </tbody>
  </table>
</template>
