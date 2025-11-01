<template>
    <div class="font-weight-display">
        <p v-for="(weight, index) in weights" :key="weight" :style="{ fontWeight: weight }" :class="{
            'mb-xl': true,
            'mb-0': index === weights.length - 1
        }">
            <span class="weight-label mb-sm">-{{ weight }}-</span>
            <span v-html="sampleText"></span><br>
            <span v-html="sampleTextItalic"></span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'FontWeightDisplay',
    data() {
        return {
            weights: [100, 200, 300, 350, 400, 500, 600, 700, 800, 900, 950],
            text: {
                chinese: '不以物喜，不以己悲。 ——范仲淹《岳阳楼记》',
                latin: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                latinLower: 'abcdefghijklmnopqrstuvwxyz',
                numbers: '0123456789,.'
            }
        };
    },
    computed: {
        sampleText() {
            return [
                this.text.chinese,
                this.text.latin,
                this.text.latinLower,
                this.text.numbers
            ].join('<br>');
        },
        sampleTextItalic() {
            return `<i>${this.sampleText}</i>`;
        }
    }
}
</script>

<style scoped>
.font-weight-display {
    text-align: center;
}

.weight-label {
    display: block;
}
</style>