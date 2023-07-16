import { downloadWallpaper } from '../util'
import { IpcMainEvent } from "electron"
import { ipcMain } from "electron"
import { resolve } from 'path'
import wallpaper from "wallpaper"

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const localFile = resolve(path, url.split('/').pop()!)
  const file = await downloadWallpaper(url, localFile)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})