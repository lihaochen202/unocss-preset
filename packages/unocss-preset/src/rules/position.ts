import { alignments, justifies } from '@unocss/preset-mini/rules'
import { h } from '@unocss/preset-mini/utils'
import type { CSSEntries, CSSObject, Rule, StaticRule } from '@unocss/core'

const justifyContent = abstractRules(justifies, 'justify-content', 'justify-')
const justifyItems = abstractRules(justifies, 'justify-items', 'justify-items-')
const alignItems = abstractRules(alignments, 'align-items', 'items-')

export const flexCompositions = composeJustifiesAlignments(justifyContent, alignItems)
  .map<StaticRule>(([k, v]) => [`flex-${k}`, v])

flexCompositions.push(['flex-center', { 'justify-content': 'center', 'align-items': 'center' }])

export const gridCompositions = composeJustifiesAlignments(justifyItems, alignItems)
  .map<StaticRule>(([k, v]) => [`grid-${k}`, v])

gridCompositions.push(['grid-center', { 'justify-items': 'center', 'align-items': 'center' }])

function composeJustifiesAlignments(
  justifies: StaticRule[],
  alignments: StaticRule[],
): StaticRule[] {
  return justifies.map(([k, v]) =>
    alignments.map(([_k, _v]): StaticRule => [
      `${k}-${_k}`,
      {
        ...v as CSSObject,
        ..._v as CSSObject,
      },
    ]),
  ).flat(1)
}

function abstractRules(
  rules: StaticRule[],
  prop: string,
  prefix: string,
): StaticRule[] {
  return rules
    .filter(v => prop in v[1])
    .map(([k, v]) => [k.slice(prefix.length), v])
}

const directionMap: Record<string, string[]> = {
  t: ['vtop', 'left', 'right'],
  b: ['vbottom', 'left', 'right'],
  l: ['vleft', 'top', 'bottom'],
  r: ['vright', 'top', 'bottom'],
  tl: ['vtop', 'vleft'],
  lt: ['vtop', 'vleft'],
  tr: ['vtop', 'vright'],
  rt: ['vtop', 'vright'],
  bl: ['vbottom', 'vleft'],
  lb: ['vbottom', 'vleft'],
  br: ['vbottom', 'vright'],
  rb: ['vbottom', 'vright'],
}

export const positions: Rule[] = [
  // absolute
  ['absolute-center', { top: '50%', left: '50%', transform: 'translate3d(-50%, -50%, 0)' }],
  ['absolute-full', { top: '0', left: '0', right: '0', bottom: '0' }],
  [/^absolute-([rltb])(?:-(.+))?$/, handlePositions, { autocomplete: [`absolute-(${Object.keys(directionMap).join('|')})-<num>`] }],
  [/^absolute-([rltb]{2})(?:-(.+))?$/, handlePositions],

  // fixed
  ['fixed-center', { top: '50%', left: '50%', transform: 'translate3d(-50%, -50%, 0)' }],
  ['fixed-full', { top: '0', left: '0', right: '0', bottom: '0' }],
  [/^fixed-([rltb])(?:-(.+))?$/, handlePositions, { autocomplete: [`fixed-(${Object.keys(directionMap).join('|')})-<num>`] }],
  [/^fixed-([rltb]{2})(?:-(.+))?$/, handlePositions],
]

function handlePositions([_, a, s]: string[]): CSSEntries | undefined {
  if (a in directionMap) {
    const v = s ? h.bracket.cssvar.global.fraction.rem(s) : '0'
    return directionMap[a].map(i => i[0] === 'v' ? [i.slice(1), v] : [i, '0'])
  }
}
