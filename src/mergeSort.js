/**
 * 归并排序
 * 时间复杂度 O(nlogn)
 */

/**
 * @param {Array} left 
 * @param {Array} right 
 * @returns {Array}
 */
const merge = (left, right) => {
  const arr = []

  while(left.length && right.length) {
    if (left[0] < right[0]) arr.push(left.shift())
    else arr.push(right.shift())
  }
  
  return [...arr, ...left, ...right]
}

/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
const mergeSort = arr => {
  const len = arr.length

  if (len < 2) return arr

  const mid = Math.floor(len / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}
