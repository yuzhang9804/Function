/**
 * 快速排序
 * 时间复杂度：O(nlogn)
 */

/**
 * @param {Array} arr 
 */
const quickSort = arr => {
  if (arr.length < 2) return arr

  const pivotIndex = Math.round(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
