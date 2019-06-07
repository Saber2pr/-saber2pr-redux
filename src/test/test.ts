import { createStore, combineReducers } from '..'
import * as reducers from './reducers'
import { State } from './state'

type A = {
  type: string
  payload: number
}

const store = createStore(combineReducers(reducers), State)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(({ dispatch }) => {
  setTimeout(
    () =>
      dispatch<A>({
        type: 'index',
        payload: 233
      }),
    1000
  )
})

store.dispatch<A>({
  type: 'index',
  payload: 233
})

store.dispatch({ type: 'index', payload: 233 })
