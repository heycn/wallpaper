import { ipcMain, dialog, IpcMainInvokeEvent } from "electron"

ipcMain.handle('setCachePath', async (_event: IpcMainInvokeEvent) => {
  const res = await dialog.showOpenDialog({
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
})
