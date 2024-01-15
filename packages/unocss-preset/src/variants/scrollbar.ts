import type { VariantObject } from '@unocss/core'

const scrollbar = 'scrollbar'

const directions: string[] = [
  'horizontal',
  'vertical',
]

const variants: string[] = [
  directions.map(i => `${scrollbar}-${i}`),
  [
    'button',
    'track',
    'track-piece',
    'thumb',
    'corner',
  ].map(i => `${scrollbar}-${i}`),
  scrollbar,
  'resizer',
].flat(1)

export function variantScrollbar(): VariantObject {
  let re: RegExp
  return {
    name: 'scrollbar',
    match(input, ctx) {
      if (!re)
        re = new RegExp(`^(${variants.join('|')})(?:${ctx.generator.config.separators.join('|')})`)

      const match = input.match(re)
      if (match) {
        const pseudo = match[1].split('-')
        const direction = directions.some(i => pseudo.includes(i))
          ? `:${pseudo.pop()}`
          : ''
        return {
          matcher: input.slice(match[0].length),
          selector: s => `${s}::-webkit-${pseudo.join('-')}${direction}`,
        }
      }
    },
    autocomplete: `(${variants.sort((a, b) => b.length - a.length).join('|')}):`,
  }
}
