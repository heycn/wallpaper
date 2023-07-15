<script setup lang="ts">
import { Pic, Setting } from '@icon-park/vue-next'
</script>

<template>
  <nav class="text-sm opacity-80 flex">
    <h1 class="py-2 pl-12 w-full text-center drag">桌面壁纸</h1>
    <span class="flex items-center justify-center gap-2 mr-2">
      <Pic
        size="20"
        title="首页"
        class="cursor-pointer hover:text-gray-600 duration-300"
        @click="$router.push({ name: 'home' })"
      />
      <Setting
        size="20"
        title="设置"
        class="cursor-pointer hover:text-gray-600 duration-300"
        @click="$router.push({ name: 'setting' })"
      />
    </span>
  </nav>
</template>
