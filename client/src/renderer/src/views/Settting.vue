<script setup lang="ts">
import { usePathStore } from '@renderer/stores/usePathStore';
import useWallpaper from '@renderer/hooks/useWallpaper'

const { setCachePath } = useWallpaper()
const path = usePathStore()
</script>

<template>
  <section class="m-4">
    <h2>壁纸缓存目录</h2>
    <div class="ml-2">
      <p class="mt-2 text-sm opacity-60 font-thin">目前在：</p>
      <div class="flex items-center">
        <button class="underline hover:opacity-60 duration-300 font-thin text-sm">{{ path.cachePath }}</button>
        <button class="text-blue-500 hover:text-blue-400 duration-300 ml-4 shrink-0" @click="setCachePath">
          更改
        </button>
      </div>
    </div>
  </section>
</template>
