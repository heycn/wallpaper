import { ipcMain, dialog } from "electron"

ipcMain.handle('setCachePath', async () => {
  const res = await dialog.showOpenDialog({
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
  return undefined
})
