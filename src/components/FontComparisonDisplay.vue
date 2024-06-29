<template>
    <div>
        <p :style="{ fontFamily: fontFamily }" :lang="language">
            <template v-for="(char, index) in characters" :key="index">
                <span v-for="weight in weights" :key="`${index}-${weight}`" :style="{ fontWeight: weight }">
                    <span v-if="weightShow">{{ weight }} - </span>
                    <span v-html="char"></span>
                    <br v-if="weightShow">
                </span>
                <br v-if="!weightShow">
            </template>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        fontFamily: String,
        language: String,
        weightShow: Boolean,
        characters: Array
    },
    data() {
        return {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
        };
    }
}
</script>