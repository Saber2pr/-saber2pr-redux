/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:47:12
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 21:11:52
 */
import { Middleware } from './type'

export const thunk: Middleware = api => next => action => {
  if (typeof action === 'function') return action(api)

  return next(action)
}
