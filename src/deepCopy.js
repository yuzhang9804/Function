/**
 * 深拷贝
 */

const deepClone = (obj, map = new WeakMap()) => {
  const cloneTarget = Array.isArray(obj) ? [] : {}

  /** 处理循环引用问题 */
  if (map.has(obj)) return map.get(obj)
  else map.set(obj, cloneTarget)

  Object.keys(obj).forEach(key => {
    cloneTarget[key] = typeof obj[key] == 'object' && obj[key] 
                          ? deepClone(obj[key], map)
                          : obj[key]
  })

  return cloneTarget
}