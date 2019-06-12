import { store } from './store'
import { A } from './action'
import { compose } from '../core'

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

const delay = (time: number) => new Promise(res => setTimeout(res, time))

store
  .dispatch(async ({ dispatch }) => {
    await delay(1000)
    return dispatch({
      type: 'addMonth',
      payload: 1
    })
  })
  .then(a => console.log(a))

store.dispatch<A.day>({
  type: 'addDay',
  payload: 1
})

function test1(a: number) {
  return a + 1
}

function test2(a: number) {
  return a + 100
}

console.log(
  compose(
    test1,
    test2
  )(1)
)
