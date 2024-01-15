import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetKite,
  presetRemToVw,
} from '@lihaochen/unocss-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetKite(),
    presetRemToVw(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
