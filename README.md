# cursor-swap

[英文](./) | [中文](./zh-cn.md)

swap cursor img-set
use a throttle to handle image set. switch image with delay. you can use it to create a dynamic cursor.

## install

```sh
npm add cursor-swap
```

## usage

```js
import cursorSwap from 'cursor-swap'
cursorSwap(target, imgArr[, options])
```

`target`: target element
\<HTMLElement>
the cursor target element
`imgArr`
\<Array>
cursor img-set array, a image array, such as:
```js
const imgCut = [d0, d1, d2, d3]
```
`options`:
\<Object>
- `delay`: delay time(ms)
  \<number>
  default `100`
- `position`: cursor position
  \<Object>
  default `{ x: 0, y: 0 }`
- `fallback`: fallback cursor
  \<string>
  default `default`
- `self`: only apply on target
  \<boolean>
  default `false`
- `throttle`: a throttle function
  \<function>
  a throttle function, I provide a simple version. you can custom it, for example `lodash.throttle`

## example

```ts
import cursorSwap from 'cursor-swap'
import d0 from './dude-cut/dude-0.png'
import d1 from './dude-cut/dude-1.png'
import d2 from './dude-cut/dude-2.png'
import d3 from './dude-cut/dude-3.png'

const button = document.createElement('button')
button.innerText = 'click here'
document.body.appendChild(button)
button.onclick = () => {
  console.log('click')
}

window.document.addEventListener('DOMContentLoaded', () => {
  // here use vite
  const imgCut = [d0, d1, d2, d3]

  cursorSwap(window.document.documentElement, imgCut, {
    delay: 100,
    position: { x: 16, y: 16 },
    self: true,
  })
})
```

now move your mouse, you will see the cursor be a dude! Because `options.slef` is enable, when cursor move to button, it will be default.

## license

MIT
