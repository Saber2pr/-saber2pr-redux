export function compose<T>(...funcs: ((...args: T[]) => T)[]) {
  if (funcs.length === 0) {
    return (arg: T) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

export function pipe<T>(...funcs: ((...args: T[]) => T)[]) {
  if (funcs.length === 0) {
    return (arg: T) => arg
  }
  return compose(...funcs.reverse())
}
