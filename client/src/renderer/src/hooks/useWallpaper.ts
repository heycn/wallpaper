import { useImageStore } from "@renderer/stores/useImageStore"

export default () => {
  const imageStore = useImageStore()
  const setWallpaper = () => {
    window.api.setWallpaper(imageStore.url)
  }
  return { setWallpaper }
}