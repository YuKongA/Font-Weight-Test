<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

const navListRef = ref(null);
const indicatorStyle = ref({});
const router = useRouter();
let baseWidth = 0;
let baseLeft = 0;
let resizeObserver = null;

function updateIndicator(reset = false) {
  const list = navListRef.value;
  if (!list) return;
  const active = list.querySelector(".active");
  if (!active) {
    indicatorStyle.value = { opacity: 0 };
    return;
  }
  const listRect = list.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  const left = activeRect.left - listRect.left;
  const top = activeRect.top - listRect.top;
  const width = activeRect.width;
  const height = activeRect.height;

  // 宽度为 0 时不要建立基准，否则后续 scaleX(width / 0) 会得到 Infinity
  if (!width) return;

  // reset 时（窗口尺寸变化、字体加载回流等）以当前几何重新建立基准并瞬时吸附；
  // 路由切换时走 else 分支，省略 transition 让 CSS 的 transform 过渡产生滑动动画。
  if (reset || !baseWidth) {
    baseWidth = width;
    baseLeft = left;
    indicatorStyle.value = {
      width: `${width}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${left}px`,
      transform: "translateX(0) scaleX(1)",
      transition: "none",
      opacity: 1,
    };
  } else {
    indicatorStyle.value = {
      width: `${baseWidth}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${baseLeft}px`,
      transform: `translateX(${left - baseLeft}px) scaleX(${width / baseWidth})`,
      opacity: 1,
    };
  }
}

onMounted(() => {
  router.isReady().then(() => {
    nextTick(() => updateIndicator(true));
    // 浏览器空闲时预加载所有懒加载页面
    const prefetch = () => {
      router.getRoutes().forEach((route) => {
        if (typeof route.components?.default === "function") {
          route.components.default();
        }
      });
    };
    if ("requestIdleCallback" in window) {
      requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 1000);
    }
  });
  // 监听导航栏尺寸变化（窗口缩放、断点切换、字体加载回流），重新对齐指示条
  if (typeof ResizeObserver !== "undefined" && navListRef.value) {
    resizeObserver = new ResizeObserver(() => updateIndicator(true));
    resizeObserver.observe(navListRef.value);
  }
});

onBeforeUnmount(() => resizeObserver?.disconnect());

watch(
  () => router.currentRoute.value.path,
  () => {
    nextTick(() => updateIndicator());
  },
);
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <h1 class="brand">字体字重测试</h1>
      <nav aria-label="导航">
        <ul class="nav-list" ref="navListRef">
          <li>
            <RouterLink class="nav-link" active-class="active" to="/"
              >首页</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/sans-serif"
              >无衬线</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/serif"
              >衬线</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/monospace"
              >等宽</RouterLink
            >
          </li>
          <li>
            <RouterLink class="nav-link" active-class="active" to="/ja-ko"
              >日韩</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="nav-link"
              active-class="active"
              to="/character-set"
              >编码</RouterLink
            >
          </li>
          <div class="nav-indicator" :style="indicatorStyle"></div>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
