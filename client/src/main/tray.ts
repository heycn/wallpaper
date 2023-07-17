import { BrowserWindow, Tray } from 'electron'
import path from 'path'
const createTray = (createWindow: () => void) => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/macTray@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  tray.on('click', () => {
    if (BrowserWindow.getAllWindows().length == 0) {
      createWindow()
    }
  })
  tray.setToolTip('wallpaper')
}

export { createTray }