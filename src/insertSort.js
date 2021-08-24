/**
 * 插入排序
 * 时间复杂度：O(n^2)
 */

const insertSort = (arr) => {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    const item = arr[i]
    let j = i - 1

    for (;j >= 0; j--) {
      /** 向后移动一位 */
      if (item < arr[j]) arr[j + 1] = arr[j]
      else break;
    }

    /** 插入数据 */
    arr[j + 1] = item
  }

  return arr
}
