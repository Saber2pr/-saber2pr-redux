/*
 * @Author: saber2pr
 * @Date: 2019-06-12 19:23:29
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-12 19:23:29
 */
export type AsyncAction<R, S> = (dispatch: Dispatch<S>, getState: () => S) => R

export interface Dispatch<S> {
  <R>(asyncAction: AsyncAction<R, S>): R
  <K extends keyof S>(type: K, payload: S[K]): S[K]
}

export function createState<S>(state: S) {
  const listeners: Function[] = []

  const getState = () => state

  const dispatch: Dispatch<S> = <R, K extends keyof S>(
    type: K | AsyncAction<R, S>,
    payload?: S[K]
  ) => {
    if (typeof type === 'function') return type(dispatch, getState)

    state[type] = payload
    listeners.forEach(l => l())
    return payload
  }

  const subscribe = (cb: Function) => {
    listeners.push(cb)
    return () => listeners.splice(listeners.indexOf(cb), 1)
  }

  return { getState, dispatch, subscribe }
}
