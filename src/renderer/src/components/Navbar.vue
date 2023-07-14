<script setup lang="ts">
import { Pic, Setting } from '@icon-park/vue-next'
</script>

<template>
  <nav class="p-2 text-sm opacity-80 flex justify-between items-center">
    <span class="w-12"></span>
    <h1>桌面壁纸</h1>
    <span class="flex items-center justify-center gap-2">
      <Pic theme="outline" size="20" fill="#333" />
      <Setting theme="outline" size="20" fill="#333" />
    </span>
  </nav>
</template>
