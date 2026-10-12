<template>
  <main>
    <h2>正常字体</h2>
    <section class="round">
      <div id="sans-serif">
        <ComparisonDisplay
          fontFamily="sans-serif"
          language="en"
          :weightShow="true"
          :characters="normalChars"
        />
      </div>
    </section>

    <h2>倾斜字体</h2>
    <section class="round">
      <div id="sans-serif">
        <ComparisonDisplay
          fontFamily="sans-serif"
          language="en"
          :weightShow="true"
          :characters="italicChars"
        />
      </div>
    </section>

    <h2>更多示例</h2>
    <section class="round">
      <div id="sans-serif">
        <MoreDisplay />
      </div>
    </section>
  </main>
</template>

<script setup>
import ComparisonDisplay from "../components/FontComparisonDisplay.vue";
import MoreDisplay from "../components/FontMoreDisplay.vue";

const normalChars = ["这是一个示例 ABCDEFG abcdefg 012345"];
const italicChars = ["<i>这是一个示例 ABCDEFG abcdefg 012345</i>"];
</script>
