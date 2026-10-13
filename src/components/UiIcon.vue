<script setup>
defineProps({ name: { type: String, required: true } });
const paths = {
  moon: 'M20.9 13a9 9 0 0 1-9.9-9.9A9 9 0 1 0 20.9 13Z',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5',
  reset: 'M3 11a9 9 0 1 1 2.6 7M3 4v7h7',
  github: 'M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.5-.4 7-1.7 7-6.3a5 5 0 0 0-1.5-3.5 4.5 4.5 0 0 0-.1-3.5S18.1.6 15 2.5a13 13 0 0 0-6 0C5.9.6 4.6 1 4.6 1a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 3 8c0 4.6 3.5 5.9 7 6.3A3.5 3.5 0 0 0 9 17v5',
  sans: 'M4.5 20 12 4l7.5 16M7.3 14h9.4',
  serif: 'M5 20 12 4l7 16M7.7 14h8.6M2.5 20h6M15.5 20h6M9 4h6',
  mono: 'M7 5h10M12 5v14M8 19h8M3 8v8M21 8v8M3 12h2M19 12h2',
  languages: 'M3 5h12M9 2v3M5 5c0 6 4 10 9 12M13 5c0 6-4 10-9 12M14 21l4-10 4 10M16 17h4',
  characters: 'm7 7-4 5 4 5m10-10 4 5-4 5m-3-14-4 18',
};
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <template v-if="name === 'overview'">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </template>
    <template v-else>
      <circle v-if="name === 'sun'" cx="12" cy="12" r="4" />
      <path :d="paths[name]" />
    </template>
  </svg>
</template>
