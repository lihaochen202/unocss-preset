import { definePreset } from '@unocss/core'
import { isString } from '@lihaochen/kite'

const remRE = /(-?[\.\d]+)rem/g

function remToPx(rem: number, base: number) {
  return rem * base
}

function pxToVw(px: number, vw: number) {
  return px / vw * 100
}

function toFixed(number: number, precision: number) {
  const multiplier = 10 ** (precision + 1)
  const wholeNumber = Math.floor(number * multiplier)
  return (Math.round(wholeNumber / 10) * 10) / multiplier
}

export interface PresetRemToVwOptions {
  /**
   * 1rem = n px
   * @default 16
   */
  baseFontSize?: number
  /**
   * @default 750
   */
  viewportWidth?: number
  /**
   * @default 5
   */
  precision?: number
}

export const presetRemToVw = definePreset((options: PresetRemToVwOptions = {}) => {
  const {
    baseFontSize = 16,
    viewportWidth = 750,
    precision = 5,
  } = options

  return {
    name: '@lihaochen/unocss-preset-rem-to-vw',
    postprocess(util) {
      util.entries.forEach((i) => {
        const value = i[1]
        if (isString(value) && remRE.test(value)) {
          i[1] = value.replace(remRE, (_, rem) => {
            const px = remToPx(Number(rem), baseFontSize)
            const vw = pxToVw(px, viewportWidth)
            return vw === 0 ? '0' : `${toFixed(vw, precision)}vw`
          })
        }
      })
    },
  }
})
