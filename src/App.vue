<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="app-header glass-nav">
    <h1 class="wrapper brand">字体字重测试</h1>
      <nav class="header-shell" aria-label="主导航">
        <ul class="ul">
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/">首&nbsp&nbsp&nbsp&nbsp页</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/sans-serif">无衬线</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/serif">衬&nbsp&nbsp&nbsp&nbsp线</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/monospace">等&nbsp&nbsp&nbsp&nbsp宽</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/ja-ko">日&nbsp&nbsp&nbsp&nbsp韩</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/character-set">编&nbsp&nbsp&nbsp&nbsp码</RouterLink>
          </li>
        </ul>
      </nav>
  </header>

  <transition name="page" mode="out-in">
    <RouterView />
  </transition>
</template>