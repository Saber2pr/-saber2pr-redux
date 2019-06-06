import { IState } from './state'
import { Action, Reducer } from '..'

type MyAction<T> = Action & { payload: T }

export const index: Reducer<IState['index']> = (
  state: IState['index'],
  action: MyAction<number>
) => {
  switch (action.type) {
    case 'index':
      return state + action.payload
    default:
      return state
  }
}

export const state = (state: IState['state'], action: MyAction<string>) => {
  switch (action.type) {
    case 'state':
      return action.payload
    default:
      return state
  }
}
