import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useImageStore = defineStore('image',
  () => {
    const url = ref('')
    return { url }
  },
  { persist: true, }
)
