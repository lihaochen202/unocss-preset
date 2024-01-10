import type { DynamicRule } from '@unocss/core'

export const ellipsis: DynamicRule[] = [
  [
    /^(?:ellipsis)(?:-(\d+))?$/,
    ([_, _lines]) => {
      const lines = _lines ? Number(_lines) : 1

      if (lines === 1) {
        return {
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        }
      }

      return {
        'display': '-webkit-box',
        'overflow': 'hidden',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': lines,
      }
    },
    {
      autocomplete: ['ellipsis-<num>'],
    },
  ],
]
