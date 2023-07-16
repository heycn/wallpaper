import { useImageStore } from "@renderer/stores/useImageStore"

export default () => {
  const imageStore = useImageStore()
  const setWallpaper = () => {
    window.api.setWallpaper(imageStore.url)
  }
  const saveWallpaper = () => {
    window.api.saveWallpaper(imageStore.url)
  }
  const setCachePath = () => {
    window.api.setCachePath()
  }

  return { setWallpaper, saveWallpaper, setCachePath }
}