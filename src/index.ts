type imgArr = string[]
type target = HTMLElement
type options = {
  self: boolean
  throttle: (fn: (e: Event) => void, delay: number) => (e: Event) => void
  delay: number
  fallback: string
  position: { x: number; y: number }
}

const _throttle = (fn: (e: Event) => void, delay: number) => {
  let now = Date.now()
  return (e: Event) => {
    if (Date.now() - now >= delay) {
      now = Date.now()
      fn(e)
    }
  }
}

const registryCursor = (
  target: target = window.document.documentElement,
  imgArr: imgArr,
  options?: Partial<options>,
): void => {
  const {
    self = false,
    throttle = _throttle,
    fallback = 'default',
    delay = 100,
    position = { x: 0, y: 0 },
  } = options || {}

  let i = 0
  const dynamicCursor = (target: target, index = i) => {
    target.style.cursor = `url(${imgArr[index]}) ${position.x} ${position.y}, ${fallback}`
  }

  const handler = (e: Event) => {
    if (self) {
      if (e.target !== target) return
      dynamicCursor(e.target as target, i++)
    } else {
      dynamicCursor(e.target as target, i++)
    }
    if (i >= imgArr.length) i = 0
  }

  target.addEventListener('mousemove', throttle(handler, delay))
}

export default registryCursor
