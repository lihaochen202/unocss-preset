import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
  '@lihaochen/unocss-preset': r('./packages/unocss-preset/src/'),
  '@lihaochen/unocss-preset-rem-to-vw': r('./packages/unocss-preset-rem-to-vw/src/'),
}
