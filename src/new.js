/**
 * new
 * 1. 创建一个空对象
 * 2. 将这个空对象的的 __proto__ 属性链接到构造函数的原型对象
 * 3. 将函数的this 绑定到对象
 * 4. 函数没有返回对象则返回 this
 */

const myNew = (fun, ...args) => {
  const obj = {}

  obj.__proto__ = fun.prototype

  return fun.apply(obj, args) || obj
}