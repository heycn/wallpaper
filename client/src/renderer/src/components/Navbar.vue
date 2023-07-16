<script setup lang="ts">
import { Pic, Setting, Computer } from '@icon-park/vue-next'
</script>

<template>
  <nav class="text-sm flex text-black">
    <p class="py-2 ml-12 w-full text-center drag flex items-center justify-center gap-1">
      <Computer theme="outline" size="16" />
      桌面壁纸
    </p>
    <span class="flex items-center justify-center gap-2 mr-2">
      <Pic
        size="16"
        title="首页"
        class="cursor-pointer hover:text-gray-600 duration-300"
        @click="$router.push({ name: 'home' })"
      />
      <Setting
        size="16"
        title="设置"
        class="cursor-pointer hover:text-gray-600 duration-300"
        @click="$router.push({ name: 'setting' })"
      />
    </span>
  </nav>
</template>
