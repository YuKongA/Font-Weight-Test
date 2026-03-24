<template>
  <main>
    <h2 class="section-title">正常字体</h2>
    <section class="round">
      <div id="monospace">
        <ComparisonDisplay fontFamily="monospace" language="en" :weightShow=true
          :characters="['这是一个示例 ABCDEFG abcdefg 012345']" />
      </div>
    </section>

    <h2 class="section-title">倾斜字体</h2>
    <section class="round">
      <div id="monospace">
        <ComparisonDisplay fontFamily="monospace" language="en" :weightShow=true
          :characters="['<i>这是一个示例 ABCDEFG abcdefg 012345</i>']" />
      </div>
    </section>

    <h2 class="section-title">更多示例</h2>
    <section class="round">
      <div id="monospace">
        <MoreDisplay />
      </div>
    </section>
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
