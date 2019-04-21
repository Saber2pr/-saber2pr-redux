import { State, IState } from './state'
import { Action, Reducer } from '../core/saber-redux'

type MyAction<T> = Action & { payload: T }

export const index: Reducer<IState['index']> = (
  state: IState['index'] = State.index,
  action: MyAction<number>
) => {
  switch (action.type) {
    case 'index':
      return action.payload
    default:
      return state
  }
}

export const state = (
  state: IState['state'] = State.state,
  action: MyAction<string>
) => {
  switch (action.type) {
    case 'state':
      return action.payload
    default:
      return state
  }
}
