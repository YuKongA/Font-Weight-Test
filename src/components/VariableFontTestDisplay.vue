<template>
    <nav id="sans-serif">
        <nav>
            <p :style="{ fontWeight: fontWeight, fontSize: '1.8em' }">{{ testText }}</p>
        </nav>
        <nav>
            <label for="fontWeight">字重: {{ fontWeight }}</label>
            <input id="weightRange" type="range" min="1" max="999" step="1" v-model="fontWeight" @input="updateRangeStyle" ref="weightRange">
        </nav>
        <nav>
            <label for="testText">自定义文本: </label>
            <input id="textInput" type="text" v-model="testText">
        </nav>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            fontWeight: 400, // 默认字重
            testText: '永 A 6' // 默认测试文本
        };
    },
    methods: {
        updateRangeStyle(event) {
            const range = event.target;
            const value = (range.value - range.min) / (range.max - range.min) * 100;
            range.style.background = `linear-gradient(to right, var(--color-footer-hover) ${value}%, var(--color-footer-background) ${value}%)`;
        }
    },
    mounted() {
        this.$nextTick(() => {
            const range = this.$refs.weightRange;
            range.value = this.fontWeight;
            this.updateRangeStyle({ target: range });
        });
    }
}
</script>