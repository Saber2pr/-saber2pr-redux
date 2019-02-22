/*
 * @Author: AK-12
 * @Date: 2019-01-26 04:01:46
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-26 04:01:46
 */
/**
 *Action
 *
 * @export
 * @interface Action
 * @template T
 */
export interface Action<T = any> {
  type: T
}
/**
 *ActionV
 *
 * @export
 * @interface ActionV
 * @template T
 * @template V
 */
export interface ActionV<T, V> {
  type: T
  value: V
}
/**
 *ActionOf types
 *
 * @export
 * @interface ActionOf
 * @extends {Action<keyof F>}
 * @template F
 */
export interface ActionOf<F> extends Action<keyof F> {}
/**
 *ActionBy types with value
 *
 * @export
 * @interface ActionBy
 * @extends {Action<keyof T>}
 * @template T
 * @template V
 */
export interface ActionBy<T, V = string> extends Action<keyof T> {
  value: V
}
/**
 *AnyAction
 *
 * @export
 * @interface AnyAction
 * @extends {Action}
 */
export interface AnyAction extends Action {
  [extraProps: string]: any
}
/**
 *Reducer
 *
 * @export
 * @interface Reducer
 * @template S
 * @template A
 */
export interface Reducer<S = any, A extends Action = AnyAction> {
  (state?: S | undefined, action?: A): S
}
export type IAction<S, T extends keyof S> = ActionV<T, S[T]>
export type IActions<S> = { [K in keyof S]: IAction<S, K> }
export type IReducer<S, T extends keyof S> = Reducer<S[T], IAction<S, T>>
export type IReducers<S> = { [K in keyof S]: IReducer<S, K> }
/**
 *Dispatch
 *
 * @export
 * @interface Dispatch
 * @template A
 */
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}
/**
 *Listener
 *
 * @export
 * @interface Listener
 * @template S
 */
export interface Listener<S> {
  (state: S): void
}
/**
 *unSubscribe
 *
 * @export
 * @interface unSubscribe
 */
export interface unSubscribe {
  (): void
}
/**
 *Subscribe
 *
 * @export
 * @interface Subscribe
 * @template S
 */
export interface Subscribe<S> {
  (listener: Listener<S>): unSubscribe
}
/**
 *Store
 *
 * @class Store
 * @template S
 * @template A
 */
export class Store<S = any, A extends Action = AnyAction> {
  /**
   *state
   *
   * @private
   * @type {S}
   * @memberof Store
   */
  private state: S
  /**
   *listeners
   *
   * @private
   * @type {Listener<S>[]}
   * @memberof Store
   */
  private listeners: Listener<S>[] = []
  /**
   *Creates an instance of Store.
   * @param {Reducer} reducer
   * @param {S} [state]
   * @memberof Store
   */
  public constructor(private reducer: Reducer, state?: S) {
    this.state = state || ({} as S)
  }
  /**
   *dispatch
   *
   * @type {Dispatch<A>}
   * @memberof Store
   */
  public dispatch: Dispatch<A> = action => {
    this.state = this.reducer(this.state, action)
    this.listeners.forEach(l => l(this.state))
    return action
  }
  /**
   *getState
   *
   * @returns {S}
   * @memberof Store
   */
  public getState(): S {
    return this.state
  }
  /**
   *subscribe
   *
   * @type {Subscribe<S>}
   * @memberof Store
   */
  public subscribe: Subscribe<S> = listener => {
    this.listeners.push(listener)
    return () => (this.listeners = this.listeners.filter(l => l !== listener))
  }
}
/**
 * createStore
 * @param reducer
 * @param state
 */
export let createStore = <S>(reducer: Reducer<S>, state?: S) =>
  new Store<S>(reducer, state)
/**
 *ReducersMapObject
 *
 * @export
 * @interface ReducersMapObject
 * @template S
 * @template A
 */
export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
}
/**
 * combineReducers
 * @param reducers
 */
export const combineReducers = <S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, A>
) => {
  return (state: S = {} as S, action: A) => {
    return Object.keys(reducers).reduce<S>(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {} as S
    )
  }
}
/**
 *compose
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export function compose<argType>(
  ...funcs: Array<(...args: argType[]) => argType>
) {
  if (funcs.length === 0) {
    return (arg: argType) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
/**
 *pipe
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export function pipe<argType>(
  ...funcs: Array<(...args: argType[]) => argType>
) {
  if (funcs.length === 0) {
    return (arg: argType) => arg
  }
  return compose(...funcs.reverse())
}
