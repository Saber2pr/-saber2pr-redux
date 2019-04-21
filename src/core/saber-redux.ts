/*
 * @Author: AK-12
 * @Date: 2019-01-26 04:01:46
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-26 04:01:46
 */
export interface Action<T = any> {
  type: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export interface Reducer<S, A extends Action = AnyAction> {
  (state: S, action: A): S
}

export class Store<S, A extends Action = AnyAction> {
  public constructor(
    private reducer: Reducer<S, A>,
    private state: S,
    private listeners: (() => void)[] = []
  ) {}

  public dispatch(action: A) {
    this.state = this.reducer(this.state, action)
    this.listeners.forEach(l => l())
    return action
  }

  public getState(): S {
    return this.state
  }

  public subscribe(listener: () => void) {
    this.listeners.push(listener)
    return () => (this.listeners = this.listeners.filter(l => l !== listener))
  }
}

export const createStore = <S>(reducer: Reducer<S>, state: S) =>
  new Store<S>(reducer, state)

export type ReducersMapObject<S, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A>
}

export const combineReducers = <S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, A>
) => (state: S, action: A) =>
  Object.keys(reducers).reduce(
    (nextState, key) =>
      Object.assign(nextState, { [key]: reducers[key](state[key], action) }),
    state
  )
