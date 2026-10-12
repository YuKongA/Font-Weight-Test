<template>
  <div id="sans-serif">
    <div class="slider-group mb-md">
      <label>字重: {{ fontWeight }}</label>
      <input
        type="range"
        v-model.number="fontWeight"
        min="1"
        max="999"
        step="1"
        :style="weightTrackStyle"
        class="custom-range"
      />
    </div>

    <div class="slider-group mb-md">
      <label>字号: {{ fontSize }}</label>
      <input
        type="range"
        v-model.number="fontSize"
        min="20"
        max="100"
        step="1"
        :style="sizeTrackStyle"
        class="custom-range"
      />
    </div>

    <div class="select-group mb-md">
      <label>字型:</label>
      <select v-model="selectedLang" class="custom-text-input">
        <option
          v-for="lang in languageOptions"
          :key="lang.value"
          :value="lang.value"
        >
          {{ lang.label }}
        </option>
      </select>
    </div>

    <div class="text-input-group mb-md">
      <label>文本: </label>
      <input
        type="text"
        v-model="testText"
        class="custom-text-input"
        placeholder="输入测试文本..."
      />
    </div>

    <div class="preview-section">
      <label>示例:</label>
      <div class="preview-text">
        <p :style="previewStyle" :lang="selectedLang">{{ testText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const fontWeight = ref(400);
const fontSize = ref(32);
const testText = ref("永 A 6");
const selectedLang = ref("zh-Hans");

const languageOptions = [
  { value: "zh-Hans", label: "简体中文 (zh-Hans)" },
  { value: "zh-CN", label: "中国大陆 (zh-CN)" },
  { value: "zh-SG", label: "新加坡 (zh-SG)" },
  { value: "zh-MY", label: "马来西亚 (zh-MY)" },
  { value: "zh-Hant", label: "繁体中文 (zh-Hant)" },
  { value: "zh-TW", label: "中国台湾 (zh-TW)" },
  { value: "zh-HK", label: "中国香港 (zh-HK)" },
  { value: "zh-MO", label: "中国澳门 (zh-MO)" },
  { value: "ja", label: "日本 (ja)" },
  { value: "ko", label: "朝鲜 (ko)" },
  { value: "ko-KR", label: "韩国 (ko-KR)" },
  { value: "vi", label: "越南 (vi)" },
];

const weightTrackStyle = computed(() => ({
  "--val": `${((fontWeight.value - 1) / 998) * 100}%`,
}));

const sizeTrackStyle = computed(() => ({
  "--val": `${((fontSize.value - 20) / 80) * 100}%`,
}));

const previewStyle = computed(() => ({
  fontWeight: fontWeight.value,
  fontSize: `${fontSize.value}px`,
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
}));
</script>

<style scoped>
.custom-range {
  -webkit-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 30px;
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  background: linear-gradient(
    to right,
    var(--color-accent) var(--val, 0%),
    var(--color-nav-bg) var(--val, 0%)
  );
  border-radius: 999px;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  user-select: none;
}

.custom-range::-webkit-slider-runnable-track {
  height: 30px;
  background: transparent;
  border: none;
  border-radius: 999px;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: none;
}

.custom-range::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: none;
}

.custom-range::-moz-range-track {
  -webkit-appearance: none;
  appearance: none;
  height: 30px;
  border-radius: 999px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: none;
}

.custom-text-input {
  -webkit-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 999px;
  background: var(--color-nav-bg);
  color: var(--color-text);
  font-size: 0.9rem;
  text-align: left;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 0;
}

.custom-text-input:focus {
  outline: none;
  background: var(--color-nav-hover);
  box-shadow: inset 0 0 0 2px var(--color-accent);
}

.custom-text-input option {
  background: var(--color-background);
  color: var(--color-text);
}

.preview-text p {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.slider-group > label,
.select-group > label,
.text-input-group > label,
.preview-section > label {
  display: block;
}
</style>

