/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:01:47
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-06 20:01:47
 */
export const compose = <T>(...funcs: Array<(value: T) => T>) => (value: T) =>
  funcs.reduce((v, fn) => fn(v), value)

export const pipe = <T>(...funcs: Array<(value: T) => T>) => (value: T) =>
  funcs.reduceRight((v, fn) => fn(v), value)
