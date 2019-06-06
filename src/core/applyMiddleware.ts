/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:13:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 20:41:40
 */
import { ApplyMiddleware } from './type'
import { compose } from './compose'

export const applyMiddleware: ApplyMiddleware = (...middlewares) => {
  return store => {
    const chain = middlewares.map(m => m(store))

    store.dispatch = compose(...chain)(store.dispatch)

    return store
  }
}
