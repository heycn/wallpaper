import { useImageStore } from "@renderer/stores/useImageStore"
import { usePathStore } from "@renderer/stores/usePathStore"
import { ElMessage } from "element-plus"

export default () => {
  const imageStore = useImageStore()
  const pathStore = usePathStore()

  const setWallpaper = async () => {
    const isExist = await window.api.checkCachePath(pathStore.cachePath)
    if (!isExist) {
      ElMessage.error('壁纸缓存目录已损坏\n请重新设置')
      setCachePath()
    } else {
      window.api.setWallpaper(imageStore.url, pathStore.cachePath)
      setTimeout(() => {
        ElMessage.success('设置壁纸成功')
      }, 350)
    }
  }
  const saveWallpaper = () => {
    window.api.saveWallpaper(imageStore.url)
  }
  const setCachePath = async () => {
    const path = await window.api.setCachePath()
    if (path) pathStore.cachePath = path
  }

  return { setWallpaper, saveWallpaper, setCachePath }
}