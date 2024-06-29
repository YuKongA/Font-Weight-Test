<template>
    <nav class="round">
        <nav id="sans-serif">
            <h2 style="font-weight: 600;">日文：</h2>
            <ComparisonDisplay fontFamily="sans-serif" language="ja" :weightShow=true
                :characters="['これは例です <i>これは例です</i>']" />
        </nav>
    </nav>
    <nav class="round">
        <nav id="sans-serif">
            <h2 style="font-weight: 600;">韩文：</h2>
            <ComparisonDisplay fontFamily="sans-serif" language="ko" :weightShow=true
                :characters="['이것은 例입니다 <i>이것은 例입니다</i>']" />
        </nav>
    </nav><br><br>
</template>

<script>
import ComparisonDisplay from '../components/FontComparisonDisplay.vue';

export default {
    components: {
        ComparisonDisplay
    }
}
</script>