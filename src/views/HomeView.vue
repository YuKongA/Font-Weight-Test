<template>
  <main>
    <nav class="round">
      <nav id="sans-serif">
        <h2 style="font-weight: 600;">常用字重映射: </h2>
        <p>
          <span style="font-weight:100;">100 - 淡体 Thin (Hairline)</span><br>
          <span style="font-weight:200;">200 - 特细 ExtraLight (UltraLight)</span><br>
          <span style="font-weight:300;">300 - 细体 Light</span><br>
          <span style="font-weight:350;">350 - 次细 DemiLight</span><br>
          <span style="font-weight:400;">400 - 标准 Normal (Regular)</span><br>
          <span style="font-weight:500;">500 - 适中 Medium</span><br>
          <span style="font-weight:600;">600 - 次粗 SemiBold (DemiBold)</span><br>
          <span style="font-weight:700;">700 - 粗体 Bold</span><br>
          <span style="font-weight:800;">800 - 特粗 ExtraBold (UltraBold)</span><br>
          <span style="font-weight:900;">900 - 浓体 Black (Heavy)</span><br>
          <span style="font-weight:950;">950 - 特浓 ExtraBlack (UltraBlack)</span><br>
        </p>
      </nav>
    </nav>
    <nav class="round">
      <nav id="sans-serif">
        <h2 style="font-weight: 600;">字重对照展示: </h2>
        <h5 style="font-weight: 500;">设备字体: </h5>
        <ComparisonDisplay fontFamily="sans-serif" language="en" :characters="['永', 'A', '6']" />
        <h5 style="font-weight:500; font-family: MiSans VF; margin-top: 0.1rem;">MiSans VF: </h5>
        <ComparisonDisplay fontFamily="MiSans VF" language="en" :characters="['永', 'A', '6']" />
      </nav>
    </nav><br><br>
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