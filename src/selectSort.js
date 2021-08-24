/**
 * 选择排序
 * 时间复杂度 O(n^2)
 */

const selectSort = (arr) => {
  const len = arr.length

  for(let i = 0; i < len; i++) {
    /** 保存最小的下标 */
    let markIndex = i

    for(let j = i + 1; j < len; j++) {
      if (arr[markIndex] > arr[j]) markIndex = j
    }

    [arr[i], arr[markIndex]] = [arr[markIndex], arr[i]]
  }

  return arr;
}
