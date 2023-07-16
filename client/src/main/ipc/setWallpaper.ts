import { downloadWallpaper } from '../util'
import { IpcMainEvent } from "electron"
import { ipcMain } from "electron"
import wallpaper from "wallpaper"

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string) => {
  const file = await downloadWallpaper(url)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})