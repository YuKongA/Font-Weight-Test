<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="wrapper">字体字重测试</nav>
    <nav class="yyy">
      <nav class="ul">
        <nav class="li">
          <RouterLink class="nothing" active-class="active" to="/">首&nbsp&nbsp页</RouterLink>
        </nav>
        <nav class="li">
          <RouterLink class="nothing" active-class="active" to="/sans-serif">无衬线</RouterLink>
        </nav>
        <nav class="li">
          <RouterLink class="nothing" active-class="active" to="/serif">衬&nbsp&nbsp线</RouterLink>
        </nav>
        <nav class="li">
          <RouterLink class="nothing" active-class="active" to="/monospace">等&nbsp&nbsp宽</RouterLink>
        </nav>
        <nav class="li">
          <RouterLink class="nothing" active-class="active" to="/ja-ko">日&nbsp&nbsp韩</RouterLink>
        </nav>
        <nav class="li" style="border-right: 0px;">
          <RouterLink class="nothing" active-class="active" to="/character-set">编&nbsp&nbsp码</RouterLink>
        </nav>
      </nav>
    </nav>
  </header>

  <RouterView />
</template>