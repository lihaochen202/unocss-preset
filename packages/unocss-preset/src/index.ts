import { definePreset } from '@unocss/core'
import { rules } from './rules'
import { variants } from './variants'
import { shortcuts } from './shortcuts'

export * from '@lihaochen/unocss-preset-rem-to-vw'

export interface PersetKiteOptions {
  prefix?: string | string[]
}

const layer = 'kite'

export const presetKite = definePreset((options: PersetKiteOptions = {}) => {
  return {
    name: '@lihaochen/unocss-preset-kite',
    prefix: options.prefix,
    layer,
    layers: {
      [layer]: -1,
    },
    rules,
    shortcuts,
    variants,
  }
})
