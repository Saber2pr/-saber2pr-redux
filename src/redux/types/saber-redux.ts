/*
 * @Author: AK-12
 * @Date: 2018-12-05 23:06:09
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 00:06:13
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
export interface Listener {
  (): void
}
/**
 *Subscribe
 *
 * @interface Subscribe
 */
export interface Subscribe {
  (listener: Listener): Listener
}
/**
 *IStore
 *
 * @interface IStore
 * @template S
 */
export interface IStore<S> {
  new (reducer: Reducer, state: S): Store<S>
}
/**
 *Store
 *
 * @export
 * @class Store
 * @template S
 */
class Store<S> {
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
  private listeners: Array<Listener>
  /**
   *Creates an instance of Store.
   * @param {Reducer} reducer
   * @param {S} state
   * @memberof Store
   */
  public constructor(private reducer: Reducer, state: S) {
    this.state = state
    this.listeners = new Array<Listener>()
  }
  /**
   *dispatch
   *
   * @type {Dispatch}
   * @memberof Store
   */
  public dispatch: Dispatch = action =>
    (this.state = this.reducer(this.state, action))
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
  public subscribe: Subscribe = listener => {
    this.listeners.push(listener)
    return () => this.listeners.filter(l => l !== listener)
  }
}
/**
 * create
 * @param Store
 * @param reducer
 * @param state
 */
let create = <S>(Store: IStore<S>, reducer: Reducer, state: S): Store<S> =>
  new Store(reducer, state)
/**
 * createStore
 * @param reducer
 */
export let createStore = <S>(reducer: Reducer<S>) =>
  create<S>(Store, reducer, reducer())
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
 *combineReducers
 *
 * @export
 * @interface combineReducers
 * @template S
 */
export interface combineReducers<S> {
  (reducers: ReducersMapObject<S, any>): Reducer<S>
}
export interface combineReducers<S, A extends Action = AnyAction> {
  (reducers: ReducersMapObject<S, A>): Reducer<S, A>
}
/**
 * combineReducers
 * @param reducers
 */
export const combineReducers = <S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, any>
) => {
  return (state: S, action: A) => {
    return Object.keys(reducers).reduce<S>((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, null)
  }
}
