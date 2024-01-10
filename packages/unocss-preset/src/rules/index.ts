import type { Rule } from '@unocss/core'
import { ellipsis } from './ellipsis'
import { flexCompositions, gridCompositions, positions } from './position'

export const rules: Rule[] = [
  ellipsis,
  flexCompositions,
  gridCompositions,
  positions,
].flat(1)
