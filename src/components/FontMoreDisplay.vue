<template>
    <div>
        <p v-for="weight in weights" :key="weight" align="center" :style="{ fontWeight: weight }">
            -{{ weight }}- <br>
            <span v-html="formattedText"></span>
            <br>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
        };
    },
    computed: {
        formattedText() {
            const baseText = `不以物喜，不以己悲。 ——范仲淹《岳阳楼记》<br>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
                        abcdefghijklmnopqrstuvwxyz<br>
                        0123456789,.<br>`;
            return baseText + `<i>${baseText}</i>`;
        }
    }
}
</script>