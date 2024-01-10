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

function getDirectionMapKeys() {
  return Object.keys(directionMap)
}

const positionsCenterRules: StaticRule[] = [
  ['', { top: '50%', left: '50%', transform: 'translate3d(-50%, -50%, 0)' }],
  ['r', { top: '50%', right: '0', transform: 'translate3d(50%, -50%, 0)' }],
  ['rr', { top: '50%', right: '0', transform: 'translate3d(100%, -50%, 0)' }],
  ['rl', { top: '50%', right: '0', transform: 'translate3d(0, -50%, 0)' }],
  ['l', { top: '50%', left: '0', transform: 'translate3d(-50%, -50%, 0)' }],
  ['ll', { top: '50%', left: '0', transform: 'translate3d(-100%, -50%, 0)' }],
  ['lr', { top: '50%', left: '0', transform: 'translate3d(0, -50%, 0)' }],
  ['t', { top: '0', left: '50%', transform: 'translate3d(-50%, -50%, 0)' }],
  ['tt', { top: '0', left: '50%', transform: 'translate3d(-50%, -100%, 0)' }],
  ['tb', { top: '0', left: '50%', transform: 'translate3d(-50%, 0, 0)' }],
  ['b', { bottom: '0', left: '50%', transform: 'translate3d(-50%, 50%, 0)' }],
  ['bb', { bottom: '0', left: '50%', transform: 'translate3d(-50%, 100%, 0)' }],
  ['bt', { bottom: '0', left: '50%', transform: 'translate3d(-50%, 0, 0)' }],
]

function genPositionsCenterRules(position: string): StaticRule[] {
  return positionsCenterRules.map(([k, v]) => [`${position}-center${k ? '-' : ''}${k}`, v])
}

export const positions: Rule[] = [
  // absolute
  [/^absolute-([rltb])(?:-(.+))?$/, handlePositions, { autocomplete: [`absolute-(${getDirectionMapKeys().join('|')})-<num>`] }],
  [/^absolute-([rltb]{2})(?:-(.+))?$/, handlePositions],
  [/^absolute-full(?:-(.+))?$/, handleFullPositions, { autocomplete: ['absolute-full-<num>'] }],
  ...genPositionsCenterRules('absolute'),

  // fixed
  [/^fixed-([rltb])(?:-(.+))?$/, handlePositions, { autocomplete: [`fixed-(${getDirectionMapKeys().join('|')})-<num>`] }],
  [/^fixed-([rltb]{2})(?:-(.+))?$/, handlePositions],
  [/^fixed-full(?:-(.+))?$/, handleFullPositions, { autocomplete: ['fixed-full-<num>'] }],
  ...genPositionsCenterRules('fixed'),
]

function handlePositions([_, a, s]: string[]): CSSEntries | undefined {
  if (a in directionMap) {
    const v = s ? h.bracket.cssvar.global.fraction.rem(s) : '0'
    return directionMap[a].map(i => i[0] === 'v' ? [i.slice(1), v] : [i, '0'])
  }
}

function handleFullPositions([_, s = '']: string[]): CSSEntries | undefined {
  const props = ['right', 'left', 'top', 'bottom']
  if (!s)
    return props.map(i => [i, '0'])
  const v = h.bracket.cssvar.global.fraction.rem(s)
  if (v)
    return props.map(i => [i, v])
}
