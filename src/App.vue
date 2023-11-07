<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <h1><a href="index.html">字体字重测试</a></h1>
      </div>
      <div class="yyy">
        <div class="ul">
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
            <RouterLink class="nothing" active-class="active" to="/ja-kr">日&nbsp&nbsp韩</RouterLink>
          </nav>
          <nav class="li" style="border-right: 0px;">
            <RouterLink class="nothing" active-class="active" to="/character-set">编&nbsp&nbsp码</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>