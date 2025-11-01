<template>
    <nav id="sans-serif">
        <nav class="slider-group mb-md">
            <label>字重: {{ fontWeight }}</label>
            <input type="range" v-model="fontWeight" v-bind="weightRangeProps" @input="updateRangeStyle('weightRange')"
                ref="weightRange" class="custom-range">
        </nav>

        <nav class="slider-group mb-md">
            <label>字号: {{ fontSize }}</label>
            <input type="range" v-model="fontSize" v-bind="sizeRangeProps" @input="updateRangeStyle('sizeRange')"
                ref="sizeRange" class="custom-range">
        </nav>

        <nav class="select-group mb-md">
            <label>字型:</label>
            <select v-model="selectedLang" class="custom-text-input">
                <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
                    {{ lang.label }}
                </option>
            </select>
        </nav>

        <nav class="text-input-group mb-md">
            <label>文本: </label>
            <input type="text" v-model="testText" class="custom-text-input" placeholder="输入测试文本...">
        </nav>

        <nav class="preview-section">
            <label>示例:</label>
            <nav class="preview-text">
                <p :style="previewStyle" :lang="selectedLang">{{ testText }}</p>
            </nav>
        </nav>
    </nav>
</template>

<script>
const DEFAULT_FONT_WEIGHT = 400;
const DEFAULT_FONT_SIZE = 32;
const DEFAULT_TEXT = '永 A 6';
const LANGUAGE_OPTIONS = [
    { value: 'zh-Hans', label: '简体中文 (zh-Hans)' },
    { value: 'zh-CN', label: '中国大陆 (zh-CN)' },
    { value: 'zh-SG', label: '新加坡 (zh-SG)' },
    { value: 'zh-MY', label: '马来西亚 (zh-MY)' },
    { value: 'zh-Hant', label: '繁体中文 (zh-Hant)' },
    { value: 'zh-TW', label: '中国台湾 (zh-TW)' },
    { value: 'zh-HK', label: '中国香港 (zh-HK)' },
    { value: 'zh-MO', label: '中国澳门 (zh-MO)' },
    { value: 'ja', label: '日本 (ja)' },
    { value: 'ko', label: '朝鲜 (ko)' },
    { value: 'ko-KR', label: '韩国 (ko-KR)' },
    { value: 'vi', label: '越南 (vi)' },
];

export default {
    data() {
        return {
            fontWeight: DEFAULT_FONT_WEIGHT,
            fontSize: DEFAULT_FONT_SIZE,
            testText: DEFAULT_TEXT,
            selectedLang: 'zh-Hans',
            languageOptions: LANGUAGE_OPTIONS
        };
    },

    computed: {
        weightRangeProps() {
            return {
                min: 1,
                max: 999,
                step: 1
            };
        },

        sizeRangeProps() {
            return {
                min: 20,
                max: 100,
                step: 1
            };
        },

        previewStyle() {
            return {
                fontWeight: this.fontWeight,
                fontSize: `${this.fontSize}px`,
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap'
            };
        }
    },

    methods: {
        updateRangeStyle(refName) {
            const range = this.$refs[refName];
            const value = (range.value - range.min) / (range.max - range.min) * 100;
            range.style.background = `linear-gradient(
                to right, 
                var(--color-footer-hover) ${value}%, 
                var(--color-footer-background) ${value}%
            )`;
        }
    },

    mounted() {
        this.$nextTick(() => {
            ['weightRange', 'sizeRange'].forEach(refName => {
                this.updateRangeStyle(refName);
            });
        });
    }
}
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
    background: var(--color-footer-background);
    border-radius: 999px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    user-select: none;
    box-shadow: none;
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
    background: var(--color-footer-background);
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
    background: var(--color-footer-background);
    color: var(--color-text);
    font-size: 0.9rem;
    text-align: left;
    transition: all 0.2s ease;
    margin-bottom: 0;
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

.slider-group>label,
.select-group>label,
.text-input-group>label,
.preview-section>label {
    display: block;
}
</style>