/**
 * 数组去重
 */

const unique = (arr, isSort) => {
  const res = []
  let prev = null
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    
    if (isSort) {
      /** 已排序通过相邻数据是否相等进行筛选 */
      !Object.is(prev, value) && res.push(value)
      prev = value
    } else if (!res.includes(value)) {
      /** 没有排序通过 includes 进行筛选 */
      res.push(value)
    }
  }

  return res
}
 