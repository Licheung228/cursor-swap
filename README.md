# cursor-swap

[English](https://github.com/Licheung228/cursor-swap/blob/main/en.md) | [Chinese](./)

交换光标图像集  
使用节流机制处理图像集。延迟切换图像，可以用来创建动态光标。

## 安装

```sh
npm add cursor-swap
```

## 使用方法

```js
import cursorSwap from 'cursor-swap'
cursorSwap(target, imgArr[, options])
```

`target`: 目标元素  
\<HTMLElement>  
光标目标元素  
`imgArr`  
\<Array>  
光标图像集数组，例如：

```js
const imgCut = [d0, d1, d2, d3]
```

`options`:  
\<Object>

- `delay`: 延迟时间（毫秒）  
  \<number>  
  默认 `100`
- `position`: 光标位置  
  \<Object>  
  默认 `{ x: 0, y: 0 }`
- `fallback`: 备用光标  
  \<string>  
  默认 `default`
- `self`: 仅应用于目标元素  
  \<boolean>  
  默认 `false`
- `throttle`: 节流函数  
  \<function>  
  节流函数，我提供了一个简单版本。你可以自定义，例如 `lodash.throttle`

## 示例

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
  // 这里使用了 Vite
  const imgCut = [d0, d1, d2, d3]

  cursorSwap(window.document.documentElement, imgCut, {
    delay: 100,
    position: { x: 16, y: 16 },
    self: true,
  })
})
```

现在移动你的鼠标，你会看到光标变成了一个小人！由于开启了 `options.self`，当你将光标移动到 `button` 的时候变为了默认。

## 许可证

MIT
