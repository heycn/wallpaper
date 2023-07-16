import { downloadWallpaper } from '../util'
import { IpcMainEvent } from "electron"
import { ipcMain } from "electron"
import wallpaper from "wallpaper"

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const file = await downloadWallpaper(url, path)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})