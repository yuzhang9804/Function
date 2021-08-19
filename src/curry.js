/**
 * 柯里化
 */
const curry = (fn) => 
        judge = (...args) => 
          args.length === fn.length
            ? fn(...args)
            : arg => judge(...args, arg)
      

/**
 * 反柯里化
 */
const unCurry = (fn) =>
        (...args) => 
          args.reduce((data, arg) => 
            data = data(arg)
          , fn)