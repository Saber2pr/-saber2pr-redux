/*
 * @Author: AK-12
 * @Date: 2018-12-05 23:06:09
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 14:05:39
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
 *ActionBy
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
/**
 *Dispatch
 *
 * @interface Dispatch
 * @template A
 */
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}
/**
 *Listener
 *
 * @interface Listener
 */
export interface Listener<S> {
  (state: S): void
}
/**
 *Subscribe
 *
 * @interface Subscribe
 */
export interface Subscribe<S> {
  (listener: Listener<S>): Listener<S>
}
/**
 *Store
 *
 * @export
 * @class Store
 * @template S
 */
class Store<S = any, A extends Action = AnyAction> {
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
   * @type {Array<Listener>}
   * @memberof Store
   */
  private listeners: Listener<S>[] = []
  /**
   *Creates an instance of Store.
   * @param {Reducer} reducer
   * @param {S} state
   * @memberof Store
   */
  public constructor(private reducer: Reducer, state: S) {
    this.state = state
  }
  /**
   *dispatch
   *
   * @type {Dispatch}
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
   * @type {Subscribe}
   * @memberof Store
   */
  public subscribe: Subscribe<S> = listener => {
    this.listeners.push(listener)
    return () => this.listeners.filter(l => l !== listener)
  }
}
/**
 * createStore
 * @param reducer
 */
export let createStore = <S>(reducer: Reducer<S>) =>
  new Store(reducer, reducer())
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
