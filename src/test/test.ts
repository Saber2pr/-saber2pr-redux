import { createStore, combineReducers } from '..'
import * as reducers from './reducers'
import { State } from './state'
import { AsyncAction } from '..'

type A = {
  type: string
  payload: number
}

const store = createStore(combineReducers(reducers), State)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

const AsyAct: AsyncAction = ({ dispatch }) => {
  setTimeout(
    () =>
      dispatch<A>({
        type: 'index',
        payload: 233
      }),
    1000
  )
}

store.dispatch(AsyAct)

store.dispatch<A>({
  type: 'index',
  payload: 233
})
