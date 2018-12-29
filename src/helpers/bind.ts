
export default (fn: Function, thisArgs: Object) => (...args:any) => fn.apply(thisArgs, args)