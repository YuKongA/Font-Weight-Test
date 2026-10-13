<script setup>
import { nextTick, ref, watch } from 'vue';
import { glyphCharacters, glyphColumns } from '../data/fonts';
import { useGlyphAlignment } from '../composables/useGlyphAlignment';
import { glyphStyleSelection } from '../composables/usePreviewSettings';

const table = ref(null);
const { schedule } = useGlyphAlignment(table);
watch(glyphStyleSelection, () => {
  nextTick(schedule);
});
</script>

<template>
  <div class="panel glyph-panel">
    <div class="glyph-toolbar">
      <div class="content-tabs" role="group" aria-label="字体分类">
        <button type="button" :aria-pressed="glyphStyleSelection === 'sans-serif'"
          @click="glyphStyleSelection = 'sans-serif'">无衬线</button>
        <button type="button" :aria-pressed="glyphStyleSelection === 'serif'"
          @click="glyphStyleSelection = 'serif'">衬线</button>
        <button type="button" :aria-pressed="glyphStyleSelection === 'monospace'"
          @click="glyphStyleSelection = 'monospace'">等宽</button>
      </div>
    </div>
    <table ref="table" class="glyph-table">
      <thead>
        <tr>
          <th v-for="column in glyphColumns" :key="column.lang" scope="col">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in glyphCharacters" :key="character">
          <td v-for="column in glyphColumns" :key="column.lang" :lang="column.lang">
            <span class="glyph-box" :style="{ fontFamily: glyphStyleSelection }"><span class="glyph-character">{{
                character }}<span class="glyph-baseline" aria-hidden="true"></span></span></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
