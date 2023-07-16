import { dialog } from "electron"
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fetch from 'node-fetch'
import { resolve } from "node:path"

export const downloadWallpaper = async (url: string, filePath?: string) => {
  const localFile = filePath || resolve(__dirname, '../../wallpaper', url.split('/').pop()!)
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('糟糕！', `下载壁纸失败，请稍后再试\nstatus: ${response.statusText}`)
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body!, createWriteStream(localFile))
  return localFile
}
