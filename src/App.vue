<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const navListRef = ref(null)
const indicatorStyle = ref({})
const router = useRouter()
let baseWidth = 0
let baseLeft = 0

function updateIndicator() {
  const list = navListRef.value
  if (!list) return
  const active = list.querySelector('.active')
  if (!active) {
    indicatorStyle.value = { opacity: 0 }
    return
  }
  const listRect = list.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  const left = activeRect.left - listRect.left
  const top = activeRect.top - listRect.top
  const width = activeRect.width
  const height = activeRect.height

  if (!baseWidth) {
    baseWidth = width
    baseLeft = left
    indicatorStyle.value = {
      width: `${width}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${left}px`,
      opacity: 1
    }
  } else {
    indicatorStyle.value = {
      width: `${baseWidth}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${baseLeft}px`,
      transform: `translateX(${left - baseLeft}px) scaleX(${width / baseWidth})`,
      opacity: 1
    }
  }
}

onMounted(() => router.isReady().then(() => nextTick(updateIndicator)))
watch(() => router.currentRoute.value.path, () => nextTick(updateIndicator))
</script>

<template>

  <header class="app-header">
    <div class="header-inner">
      <h1 class="brand">字体字重测试</h1>
      <nav aria-label="导航">
        <ul class="nav-list" ref="navListRef">
          <li>
            <RouterLink class="nav-link" active-class="active" to="/">首页</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/sans-serif">无衬线</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/serif">衬线</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/monospace">等宽</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/ja-ko">日韩</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/character-set">编码</RouterLink>
          </li>
          <div class="nav-indicator" :style="indicatorStyle"></div>
        </ul>
      </nav>
    </div>
  </header>

  <transition name="page" mode="out-in">
    <RouterView />
  </transition>
</template>
