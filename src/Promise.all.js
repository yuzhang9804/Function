/**
 * Promise.All
 * @param {Array} arr Promise 数组
 * @returns 
 */
const PromiseAll = (arr) => {
  let data = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then(res => {
          data[i] = res
          if (data.length === arr.length) resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    }
  })
}