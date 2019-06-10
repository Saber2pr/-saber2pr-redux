/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:01:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 20:43:45
 */
import { Reducer, IStore } from './type'

export class Store<S> implements IStore<S> {
  public constructor(private reducer: Reducer<S>, private state: S = {} as S) {}

  private listeners: (() => void)[] = []

  public dispatch: IStore<S>['dispatch'] = action => {
    this.state = this.reducer(this.state, action)
    this.listeners.forEach(l => l())
    return action
  }

  public getState: IStore<S>['getState'] = () => {
    return this.state
  }

  public subscribe: IStore<S>['subscribe'] = listener => {
    this.listeners.push(listener)
    return () => (this.listeners = this.listeners.filter(l => l !== listener))
  }
}
