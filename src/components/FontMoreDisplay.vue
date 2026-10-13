<script setup>
import { weightDefinitions } from '../data/fonts';
defineProps({ family: { type: String, required: true } });
const samples = weightDefinitions.filter(item => [300, 400, 700].includes(item.weight));
</script>

<template>
  <div class="panel reading-grid">
    <article v-for="item in samples" :key="item.weight" class="reading-card"
      :style="{ fontFamily: family, fontWeight: item.weight }" lang="en">
      <h3>{{ item.weight }} · {{ item.name }} / {{ item.english }}</h3>
      <p>不以物喜，<br>不以己悲。</p>
      <p class="alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789 , . : ; ! ?</p>
      <p v-if="family === 'monospace'" class="alphabet">const weight = 400;<br>if (type === "mono")
        {<br>&nbsp;&nbsp;return "Aa 06";<br>}</p>
      <p v-else class="alphabet" style="font-style: italic">The quick brown fox jumps over the lazy dog.</p>
    </article>
  </div>
</template>
