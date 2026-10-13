<script setup>
import { computed } from 'vue';
import ContentSection from '../components/ContentSection.vue';
import { characterData } from '../data/characters';
import { codepoint } from '../data/fonts';
import { charsetSelection } from '../composables/usePreviewSettings';
const characters = computed(() => Array.from(characterData.standards[charsetSelection.value].replace(/\s/g, '')));
const cjkBlocks = characterData.cjk.map(item => ({ label: item.label.replace(/:$/, ''), characters: item.chars.split(/\s+/).filter(Boolean) }));
</script>

<template>
  <div class="page-stack">
    <ContentSection id="character-standards" number="01" title="国标字符覆盖">
      <div id="charset-panel" class="panel">
        <div class="charset-toolbar">
          <div class="charset-options content-tabs" role="group" aria-label="字符标准">
            <button v-for="(_, label) in characterData.standards" :key="label" type="button" :data-charset="label"
              :aria-pressed="charsetSelection === label" @click="charsetSelection = label">{{ label }}</button>
          </div>
        </div>
        <div class="character-grid" lang="en">
          <div v-for="(character, index) in characters" :key="charsetSelection + '-' + index" class="character-cell">
            <span>{{ character }}</span><code>{{ codepoint(character) }}</code></div>
        </div>
      </div>
      <div class="font-hint"><strong>缺字提示</strong><span>空白、方框或替代符号可能表示字体缺字。</span></div>
    </ContentSection>
    <ContentSection id="cjk-characters" number="02" title="CJK 统一汉字">
      <div class="cjk-grid">
        <article v-for="block in cjkBlocks" :key="block.label" class="cjk-card">
          <div class="cjk-card-head">
            <h3>{{ block.label }}</h3><code>{{ codepoint(block.characters[0]) }}</code>
          </div>
          <div class="cjk-chars" lang="en"><span v-for="(character, index) in block.characters" :key="index"
              :title="codepoint(character)">{{ character }}</span></div>
        </article>
      </div>
    </ContentSection>
    <details class="disclosure">
      <summary>字符集与字体覆盖有什么区别？</summary>
      <p>GB2312、GBK、GB18030 是编码标准；页面中的 U+ 标记表示字符的 Unicode 码位。字符属于某个标准，不代表当前设备字体一定包含它。浏览器也可能使用其他字体回退显示。</p>
    </details>
  </div>
</template>
