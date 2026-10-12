<template>
  <div>
    <p :style="{ fontFamily: fontFamily }">
      <template v-for="(char, index) in characters" :key="index">
        <span
          v-for="weight in weights"
          :key="`${index}-${weight}`"
          :style="{ fontWeight: weight }"
        >
          <span v-if="weightShow">{{ weight }} - </span>
          <span v-html="char"></span>
          <br v-if="weightShow" />
        </span>
        <br v-if="!weightShow" />
      </template>
    </p>
  </div>
</template>

<script setup>
defineProps({
  fontFamily: {
    type: String,
    default: "",
  },
  weightShow: {
    type: Boolean,
    default: false,
  },
  characters: {
    type: Array,
    default: () => [],
  },
});

const weights = [100, 200, 300, 350, 400, 500, 600, 700, 800, 900, 950];
</script>
