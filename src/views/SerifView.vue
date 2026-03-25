<template>
    <main>
        <h2 class="section-title">正常字体</h2>
        <section class="round">
            <div id="serif">
                <ComparisonDisplay fontFamily="serif" language="en" :weightShow=true
                    :characters="['这是一个示例 ABCDEFG abcdefg 012345']" />
            </div>
        </section>

        <h2 class="section-title">倾斜字体</h2>
        <section class="round">
            <div id="serif">
                <ComparisonDisplay fontFamily="serif" language="en" :weightShow=true
                    :characters="['<i>这是一个示例 ABCDEFG abcdefg 012345</i>']" />
            </div>
        </section>

        <h2 class="section-title">更多示例</h2>
        <section class="round">
            <div id="serif">
                <MoreDisplay />
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script>
import ComparisonDisplay from '../components/FontComparisonDisplay.vue';
import MoreDisplay from '../components/FontMoreDisplay.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    components: {
        ComparisonDisplay,
        MoreDisplay,
        AppFooter
    }
}
</script>
