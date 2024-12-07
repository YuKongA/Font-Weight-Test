<template>
    <nav id="sans-serif">
        <div class="controls">
            <div class="slider-group">
                <label>字重: {{ fontWeight }}</label>
                <input 
                    type="range" 
                    v-model="fontWeight" 
                    v-bind="weightRangeProps"
                    @input="updateRangeStyle($event, 'weightRange')" 
                    ref="weightRange"
                    class="custom-range">
            </div>

            <div class="slider-group">
                <label>字号: {{ fontSize }}</label>
                <input 
                    type="range" 
                    v-model="fontSize" 
                    v-bind="sizeRangeProps"
                    @input="updateRangeStyle($event, 'sizeRange')" 
                    ref="sizeRange"
                    class="custom-range">
            </div>

            <div class="text-input-group">
                <label>文本: </label>
                <div class="input-wrapper">
                    <input 
                        type="text" 
                        v-model="testText"
                        class="custom-text-input"
                        placeholder="输入测试文本...">
                </div>
            </div>
        </div>

        <div class="preview-section">
            <label>示例:</label>
            <div class="preview-text">
                <p :style="previewStyle">{{ testText }}</p>
            </div>
        </div>
    </nav>
</template>

<script>
const DEFAULT_FONT_WEIGHT = 400;
const DEFAULT_FONT_SIZE = 32;
const DEFAULT_TEXT = '永 A 6';

export default {
    data() {
        return {
            fontWeight: DEFAULT_FONT_WEIGHT,
            fontSize: DEFAULT_FONT_SIZE,
            testText: DEFAULT_TEXT
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
        updateRangeStyle(event, refName) {
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
                this.updateRangeStyle(null, refName);
            });
        });
    }
}
</script>

<style scoped>
.custom-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 30px;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: var(--color-footer-background);
}

.custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
}

.custom-range::-moz-range-thumb {
    width: 0;
    height: 0;
    border: none;
}

.custom-range::-moz-range-track {
    height: 36px;
    border-radius: 999px;
    background: var(--color-footer-background);
}

.custom-text-input {
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
}

.preview-text p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
}
</style>

</```rewritten_file>