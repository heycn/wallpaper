<script setup lang="ts">
import { Home, Setting, Computer } from '@icon-park/vue-next'
</script>

<template>
  <nav class="text-sm flex text-black">
    <p class="py-2 ml-12 w-full text-center drag flex items-center justify-center gap-1">
      <Computer theme="outline" size="16" />
      桌面壁纸
    </p>
    <button
      v-if="$route.name !== 'setting'"
      class="m-2 hover:bg-gray-200 duration-300 p-1 rounded"
      title="设置"
      @click="$router.push({ name: 'setting' })"
    >
      <Setting size="16" />
    </button>
    <button
      v-if="$route.name !== 'home'"
      class="m-2 hover:bg-gray-200 duration-300 p-1 rounded"
      title="首页"
      @click="$router.push({ name: 'home' })"
    >
      <Home size="16" />
    </button>
  </nav>
</template>
