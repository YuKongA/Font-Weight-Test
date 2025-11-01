<template>
  <main>
    <h2 class="section-title">正常字体</h2>
    <nav class="round">
      <nav id="monospace">
        <ComparisonDisplay fontFamily="monospace" language="en" :weightShow=true
          :characters="['这是一个示例 ABCDEFG abcdefg 012345']" />
      </nav>
    </nav>

    <h2 class="section-title">倾斜字体</h2>
    <nav class="round">
      <nav id="monospace">
        <ComparisonDisplay fontFamily="monospace" language="en" :weightShow=true
          :characters="['<i>这是一个示例 ABCDEFG abcdefg 012345</i>']" />
      </nav>
    </nav>

    <h2 class="section-title">更多示例</h2>
    <nav class="round">
      <nav id="monospace">
        <MoreDisplay />
      </nav>
    </nav>
  </main>
</template>

<script>
import ComparisonDisplay from '../components/FontComparisonDisplay.vue';
import MoreDisplay from '../components/FontMoreDisplay.vue';

export default {
  components: {
    ComparisonDisplay,
    MoreDisplay
  }
}
</script>