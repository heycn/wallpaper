<script setup lang="ts">
import { Github, Mail } from '@icon-park/vue-next'
</script>

<template>
  <footer class="mb-2 opacity-40 text-sm flex justify-center gap-3 font-sans">
    联系我:
    <a href="https://github.com/heycn" target="_blank" rel="noopener noreferrer" class="flex gap-1 items-center underline">
      <Github theme="outline" size="18" />
      <span>heycn</span>
    </a>
    <a href="mailto:heycn@foxmail.com" title="go to my github!" target="_blank" class="flex gap-1 items-center underline">
      <Mail theme="outline" size="18" />
      <span>heycn@foxmail.com</span>
    </a>
  </footer>
</template>
