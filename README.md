## Usage

```bash
pnpm add @lihaochen/unocss-preset -D
```

`uno.config.ts`

```ts
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
    presetKite(),
    presetRemToVw(),
  ],
})
```
