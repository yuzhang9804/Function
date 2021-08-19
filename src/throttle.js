/**
 * 节流函数 在 n 秒只会执行一次
 * @param {Function} fn 
 * @param {Number} wait 
 */
const throttle = (fn, wait) => {
  let timer

  return function() {
    let context = this
    let args = arguments

    if (!timer) {
      timer = setTimeout(() => {
        timer = null
      }, wait)

      fn.apply(context, args)
    }
  }
}