import { IpcMainEvent } from "electron";
import { ipcMain } from "electron";
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util'
import fetch from 'node-fetch';
import { resolve } from "node:path";


ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string) => {
  const localFile = resolve(__dirname, '../../wallpaper', url.split('/').pop()!)
  console.log(localFile)
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
  await streamPipeline(response.body!, createWriteStream(localFile))
})