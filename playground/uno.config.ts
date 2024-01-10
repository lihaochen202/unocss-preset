import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import { presetKite, presetRemToVw } from '@lihaochen/unocss-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetKite({
      // prefix: 'x-',
    }),
    presetRemToVw(),
  ],
})
