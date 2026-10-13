<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import AppFooter from './components/AppFooter.vue';
import UiIcon from './components/UiIcon.vue';

const navigation = [
  { to: '/', label: '概览', icon: 'overview', title: '概览' },
  { to: '/sans-serif', label: '无衬线', icon: 'sans', title: '无衬线' },
  { to: '/serif', label: '衬线', icon: 'serif', title: '衬线' },
  { to: '/monospace', label: '等宽', icon: 'mono', title: '等宽' },
  { to: '/ja-ko', label: '日韩', icon: 'languages', title: '日韩' },
  { to: '/character-set', label: '编码', icon: 'characters', title: '编码' },
];
const route = useRoute();
const main = ref(null);
const currentPage = computed(() => navigation.find(item => item.to === route.path) ?? navigation[0]);
const theme = ref(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
const themeLabel = computed(() => '切换至' + (theme.value === 'dark' ? '浅' : '深') + '色模式');
let manualTheme = false;
try { manualTheme = ['light', 'dark'].includes(localStorage.getItem('font-design-theme')); } catch {}
const systemTheme = matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
  manualTheme = true;
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('font-design-theme', theme.value); } catch {}
}
function syncSystemTheme(event) {
  if (!manualTheme) theme.value = event.matches ? 'dark' : 'light';
}
watch(theme, value => { document.documentElement.dataset.theme = value; }, { immediate: true });
watch(() => route.path, async (_, previous) => {
  document.title = currentPage.value.title + ' · 字体字重测试';
  if (previous !== undefined) {
    await nextTick();
    main.value?.focus({ preventScroll: true });
  }
}, { immediate: true });
onMounted(() => systemTheme.addEventListener('change', syncSystemTheme));
onBeforeUnmount(() => systemTheme.removeEventListener('change', syncSystemTheme));
</script>

<template>
  <a class="skip-link" href="#main">跳转到内容</a>
  <header class="site-header" lang="zh-CN">
    <div class="header-inner">
      <RouterLink class="brand" to="/">
        <span class="brand-mark" aria-hidden="true" lang="en">A<span>a</span></span>
        <span class="brand-copy"><strong>字体字重测试</strong><span>FONT WEIGHT TEST</span></span>
      </RouterLink>
      <div class="header-actions">
        <button id="theme-toggle" class="icon-button" type="button" :aria-label="themeLabel" :title="themeLabel" @click="toggleTheme">
          <UiIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <a class="icon-button github-link" href="https://github.com/YuKongA/Font-Weight-Test" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
          <UiIcon name="github" />
        </a>
      </div>
    </div>
    <nav class="navigation" aria-label="分类导航">
      <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" :data-page="item.icon">
        <UiIcon class="nav-icon" :name="item.icon" />{{ item.label }}
      </RouterLink>
    </nav>
  </header>
  <main id="main" ref="main" class="main-container" tabindex="-1" lang="zh-CN">
    <h1 id="page-title" class="sr-only">{{ currentPage.title }}</h1>
    <div id="page-content"><RouterView :key="$route.path" /></div>
    <AppFooter />
  </main>
</template>
