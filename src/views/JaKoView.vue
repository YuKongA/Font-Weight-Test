<template>
  <main>
    <h2 class="section-title">日文字体</h2>
    <nav class="round">
      <nav id="sans-serif">
        <ComparisonDisplay fontFamily="sans-serif" :weightShow=true :characters="['これは例です <i>これは例です</i>']" />
      </nav>
    </nav>

    <h2 class="section-title">韩文字体</h2>
    <nav class="round">
      <nav id="sans-serif">
        <ComparisonDisplay fontFamily="sans-serif" :weightShow=true :characters="['이것은例입니다 <i>이것은例입니다</i>']" />
      </nav>
    </nav>
  </main>
</template>

<script>
import ComparisonDisplay from '../components/FontComparisonDisplay.vue';

export default {
  components: {
    ComparisonDisplay
  }
}
</script>