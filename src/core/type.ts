/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:01:03
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 21:11:48
 */
export interface Action<T = any> {
  type: T
}

export interface AsyncAction<S = {}> {
  (api: MiddlewareAPI<S>): void
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export interface Reducer<S, A extends Action = AnyAction> {
  (state: S, action: A): S
}

export type ReducersMapObject<S, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A>
}

export interface MiddlewareAPI<S> {
  dispatch<A extends AnyAction>(action: A): A
  dispatch(action: AsyncAction<S>): void

  getState(): S

  subscribe(listener: () => void): () => void
}

export type Middleware = <S>(
  api: MiddlewareAPI<S>
) => (next: MiddlewareAPI<S>['dispatch']) => MiddlewareAPI<S>['dispatch']

export type ApplyMiddleware = <S>(
  ...middlewares: Middleware[]
) => (store: MiddlewareAPI<S>) => MiddlewareAPI<S>
