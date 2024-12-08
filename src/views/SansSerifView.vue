<template>
  <main>
    <h2 style="font-weight: 600;">正常字体</h2>
    <nav class="round">
        <nav id="sans-serif">
            <ComparisonDisplay fontFamily="sans-serif" language="en" :weightShow=true
                :characters="['这是一个示例 ABCDEFG abcdefg 012345']" />
        </nav>
    </nav>

    <h2 style="font-weight: 600;">倾斜字体</h2>
    <nav class="round">
        <nav id="sans-serif">
            <ComparisonDisplay fontFamily="sans-serif" language="en" :weightShow=true
                :characters="['<i>这是一个示例 ABCDEFG abcdefg 012345</i>']" />
        </nav>
    </nav>

    <h2 style="font-weight: 600;">更多示例</h2>
    <nav class="round">
        <MoreDisplay />
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