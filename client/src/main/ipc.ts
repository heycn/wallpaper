import { IpcMainEvent } from "electron";
import { ipcMain } from "electron";

ipcMain.on('setWallpaper', (_event: IpcMainEvent, url: string) => {
  console.log('ipcMain', url)
})