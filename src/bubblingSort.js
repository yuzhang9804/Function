/**
 * 冒泡排序
 * 时间复杂度 O(n^2)
 */

const bubblingSort = (arr) => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    /** 遍历完未发生改变则不需排序 */
    let flag = true

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = false
      }
    }

    if (flag) break;
  }
  return arr;
}