/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:03:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 21:02:43
 */
import { Reducer, Middleware } from './type'
import { Store } from './store'
import { applyMiddleware } from './applyMiddleware'
import { thunk } from './thunk'

export const createStore = <S>(
  reducer: Reducer<S>,
  state: S,
  ...middlewares: Middleware[]
) => {
  const store = applyMiddleware<S>(thunk)(new Store<S>(reducer, state))

  if (middlewares) return applyMiddleware<S>(...middlewares)(store)

  return store
}
