<script setup lang="ts">
import { Github, Mail } from '@icon-park/vue-next'
</script>

<template>
  <img src="../../images/1.png" alt="" class="aspect-video" />
  <section class="m-2">
    <button class="bg-gray-100 text-center w-full py-2 rounded-lg hover:bg-white duration-500 shadow-sm hover:shadow-lg">
      设为壁纸
    </button>
    <div class="my-2 mx-1 flex flex-row-reverse">
      <button class="text-blue-500 hover:text-blue-400 text-sm duration-300">下载壁纸</button>
    </div>
  </section>
  <section class="mt-3 text-gray-700 text-sm flex justify-center gap-3">
    联系我:
    <a href="https://github.com/heycn" target="_blank" rel="noopener noreferrer" class="flex gap-1">
      <Github theme="outline" size="18" />
      <span>heycn</span>
    </a>
    <a href="mailto:heycn@foxmail.com" target="_blank" class="flex gap-1">
      <Mail theme="outline" size="18" />
      <span>heycn@foxmail.com</span>
    </a>
  </section>
</template>
