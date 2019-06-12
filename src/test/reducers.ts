import { A } from './action'
import { Reducer } from '../core'
import { IState } from './state'

export const month: Reducer<IState['month'], A.month> = (state, action) => {
  switch (action.type) {
    case 'addMonth':
      return state + action.payload
    case 'subMonth':
      return state - action.payload
    default:
      return state
  }
}

export const day: Reducer<IState['day'], A.day> = (state, action) => {
  switch (action.type) {
    case 'addDay':
      return state + action.payload
    case 'subDay':
      return state - action.payload
    default:
      return state
  }
}
