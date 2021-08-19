/**
 * 函数防抖（debounce）
 * 简介：在 n 秒内只会执行一次，如果 n 秒内再次被触发，则重新计算时间
 * @param {Function} fn 
 * @param {Number} wait 等待时间
 * @param {Boolean} immediate 是否立即调用
 * @returns 
 */
const debounce = (fn, wait, immediate) => {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    if (timer) clearInterval(timer)

    if(immediate && !timer) {
      fn.apply(context, args)
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}