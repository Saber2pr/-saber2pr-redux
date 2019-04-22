import { createStore, combineReducers } from '../core/saber-redux'
import * as reducers from './reducers'
import { State } from './state'

const store = createStore(combineReducers(reducers), State)
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch({
  type: 'state',
  payload: 'in'
})

store.dispatch({
  type: 'index',
  payload: 233
})
