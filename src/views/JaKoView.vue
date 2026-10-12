<template>
  <main>
    <h2>日文字体</h2>
    <section class="round">
      <div id="sans-serif">
        <ComparisonDisplay
          fontFamily="sans-serif"
          :weightShow="true"
          :characters="jaChars"
        />
      </div>
    </section>

    <h2>韩文字体</h2>
    <section class="round">
      <div id="sans-serif">
        <ComparisonDisplay
          fontFamily="sans-serif"
          :weightShow="true"
          :characters="koChars"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import ComparisonDisplay from "../components/FontComparisonDisplay.vue";

const jaChars = ["これは例です <i>これは例です</i>"];
const koChars = ["이것은例입니다 <i>이것은例입니다</i>"];
</script>
