import { ipcMain, dialog, IpcMainEvent } from "electron"
import { downloadWallpaper } from "../util"

ipcMain.on('saveWallpaper', async (event: IpcMainEvent, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '壁纸另存为',
    defaultPath: fileName,
    properties: ['createDirectory']
  })
  if(res.canceled) return
  downloadWallpaper(url, res.filePath)
})