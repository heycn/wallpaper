import { useImageStore } from "@renderer/stores/useImageStore"
import { usePathStore } from "@renderer/stores/usePathStore"


export default () => {
  const imageStore = useImageStore()
  const pathStore = usePathStore()

  const setWallpaper = () => {
    window.api.setWallpaper(imageStore.url, pathStore.cachePath)
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