<template>
  <main>
    <h2 style="font-weight: 600;">常用字重映射</h2>
    <nav class="round">
      <p id="sans-serif">
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

    <h2 style="font-weight: 600;">字重对照展示</h2>
    <nav class="round">
      <p style="font-weight: 500;">设备字体:</p>
      <ComparisonDisplay fontFamily="sans-serif" language="en" :characters="['永', 'A', '6']" />
      <p style="font-weight: 500; font-family: MiSans VF;">MiSans VF:</p>
      <ComparisonDisplay fontFamily="MiSans VF" language="en" :characters="['永', 'A', '6']" />
    </nav>

    <h2 style="font-weight: 600;">可变字体测试</h2>
    <nav class="round">
      <VariableFontTestDisplay />
    </nav>

    <h2 style="font-weight: 600;">同字字形测试</h2>
    <nav class="round">
      <CJKCharacterDisplay />
    </nav>
  </main>
</template>

<script>
import ComparisonDisplay from '../components/FontComparisonDisplay.vue';
import VariableFontTestDisplay from '../components/VariableFontTestDisplay.vue';
import CJKCharacterDisplay from '../components/CJKCharacterDisplay.vue';

export default {
  components: {
    ComparisonDisplay,
    VariableFontTestDisplay,
    CJKCharacterDisplay
  }
}
</script>