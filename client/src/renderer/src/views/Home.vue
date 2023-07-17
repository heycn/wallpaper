<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElLoading } from 'element-plus'
import { http } from '@renderer/shared/http'
import { useImageStore } from '@renderer/stores/useImageStore'
import { Back, Next, ShuffleOne } from '@icon-park/vue-next'
import useWallpaper from '@renderer/hooks/useWallpaper'

const { setWallpaper, saveWallpaper } = useWallpaper()
const imageStore = useImageStore()
const img = ref<HTMLImageElement>()
const getImage: () => Promise<void> = async () => {
  const res = await http.get('/')
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
    <img ref="img" :src="imageStore.url" class="aspect-video drag" />
  </section>
  <section class="m-2">
    <div class="my-2 mx-1 flex justify-between items-center text-sm text-blue-500">
      <div class="flex gap-4">
        <!-- <button class="hover:text-blue-400 duration-300 flex items-center gap-1" @click="getImage">
          <Back theme="outline" size="16" />
          上一张
        </button>
        <button class="hover:text-blue-400 duration-300 flex items-center gap-1" @click="getImage">
          <Next theme="outline" size="16" />
          下一张
        </button> -->
        <button class="hover:text-blue-400 duration-300 flex items-center gap-1" @click="getImage">
          <ShuffleOne theme="outline" size="16" />
          随机切换
        </button>
      </div>
      <button class="hover:text-blue-400 duration-300" @click="saveWallpaper">
        保存壁纸
      </button>
    </div>
    <button class="bg-[#346dc8] text-center w-full py-2 rounded-lg text-gray-300
     hover:bg-opacity-80 duration-500 shadow-sm hover:shadow-lg" @click="setWallpaper">
      设为壁纸
    </button>
  </section>
</template>
