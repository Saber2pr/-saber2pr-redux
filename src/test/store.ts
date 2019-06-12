import * as reducers from './reducers'
import { createStore, combineReducers } from '../core'
import { State } from './state'

export const store = createStore(
  combineReducers(reducers),
  State
)
