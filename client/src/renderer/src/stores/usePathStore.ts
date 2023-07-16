import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePathStore = defineStore('path',
  () => {
    const cachePath = ref('aaa/bbb/ccc')
    return { cachePath }
  },
  { persist: true, }
)
