<script setup lang="ts">
import { Github, Mail } from '@icon-park/vue-next'
import { onMounted, ref } from 'vue';
import { ElLoading } from 'element-plus'
import { http } from '@renderer/shared/http';
import { useImageStore } from '@renderer/stores/useImageStore';

const imageStore = useImageStore()
const img = ref<HTMLImageElement>()
const getImage: () => Promise<void> = async () => {
  const res = await http.get('/')
  console.log(res.data)
  const loading = ElLoading.service({
    lock: true,
    fullscreen: true,
    text: '切换壁纸中',
    background: 'rgba(0, 0, 0, .5)',
  })
  imageStore.url = res.data
  img.value!.src = imageStore.url
  img.value!.onload = (): void => { loading.close() }
}
onMounted(() => {
  if (!imageStore.url) getImage()
})
</script>

<template>
  <section class="mx-2 rounded-md overflow-hidden shadow-lg">
    <img ref="img" :src="imageStore.url" class="aspect-video cursor-pointer" draggable="false" @click="getImage" />
  </section>
  <section class="m-2">
    <button class="bg-gray-100 text-center w-full py-2 rounded-lg
     hover:bg-white duration-500 shadow-sm hover:shadow-lg">
      设为壁纸
    </button>
    <div class="my-2 mx-1 flex justify-between items-center text-sm">
      <span class="w-1/6"></span>
      <span class="font-light opacity-50">点击大图随机切换壁纸</span>
      <button class="text-blue-500 hover:text-blue-400 duration-300">下载壁纸</button>
    </div>
  </section>
  <section class="mt-4 text-gray-700 text-sm flex justify-center gap-3">
    联系我:
    <a href="https://github.com/heycn" target="_blank" rel="noopener noreferrer" class="flex gap-1">
      <Github theme="outline" size="18" />
      <span>heycn</span>
    </a>
    <a href="mailto:heycn@foxmail.com" title="go to my github!" target="_blank" class="flex gap-1">
      <Mail theme="outline" size="18" />
      <span>heycn@foxmail.com</span>
    </a>
  </section>
</template>
