import { defineStore } from 'pinia'
import { http } from '@renderer/shared/http'
import { ref } from 'vue'

export const useImageStore = defineStore('image',
  () => {
    const url = ref('')
    return { url }
  },
  { persist: true, }
)
