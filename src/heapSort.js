/**
 * 堆排序
 * 时间复杂度 O(nlogn)
 */

/**
 * @param {Array} arr 
 */
const heapSort = arr => {
  const len = arr.length
  let heapSize = len

  /** 第一个非叶子节点 */
  const firstNodeIndex = Math.floor(len / 2) - 1

  /** 构建大顶堆 */
  for (let i = firstNodeIndex; i >= 0; i--) {
    maxHeapify(arr, i, heapSize)
  }

  /** 排序 */
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapSize--;
    maxHeapify(arr, 0, heapSize)    
  }

  return arr
}

/** 大顶堆调整 */
function maxHeapify(arr, i, heapSize) {
  const left = i * 2 + 1
  const right = i * 2 + 2
  /** 最大节点 */
  let largest = i

  if (left < heapSize && arr[left] > arr[i]) {
    largest = left
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right
  }

  /** 交换节点 */
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    maxHeapify(arr, largest, heapSize)
  }
}

/** 交换节点 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
