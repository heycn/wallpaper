import axios from "axios"
import { ElLoading, ElMessage } from "element-plus"

const http = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3000' : '',
  timeout: 10000
})

http.interceptors.request.use(
  config => {
    ElLoading.service({
      fullscreen: true,
      text: '加载中',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return config
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  response => response,
  error => {
    ElMessage({
      message: error.response.data.message,
      type: 'error',
      duration: 3000,
      center: false,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export { http }