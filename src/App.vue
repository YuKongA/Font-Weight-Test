<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="app-header glass-nav">
    <h1 class="wrapper brand">字体字重测试</h1>
      <nav class="header-shell" aria-label="导航">
        <ul class="ul">
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/">首页</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/sans-serif">无衬线</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/serif">衬线</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/monospace">等宽</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/ja-ko">日韩</RouterLink>
          </li>
          <li class="li">
            <RouterLink class="nothing" active-class="active" to="/character-set">编码</RouterLink>
          </li>
        </ul>
      </nav>
  </header>

  <transition name="page" mode="out-in">
    <RouterView />
  </transition>
</template>