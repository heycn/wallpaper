import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string, path: string) => void
      saveWallpaper: (url: string) => void
      setCachePath: () => Promise<string>
    }
  }
}
