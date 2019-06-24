import { store } from './store'
import { A } from './action'
import { compose } from '..'
import { createState } from '../state'

// console.log(store.getState())
// store.subscribe(() => console.log(store.getState()))

// const delay = (time: number) => new Promise(res => setTimeout(res, time))

// const a = store.dispatch(({ dispatch }) => {
//   delay(1000).then(() =>
//     dispatch({
//       type: 'addMonth',
//       payload: 1
//     })
//   )

//   return { aa: 'aa' }
// })

// console.log(a)

// store.dispatch<A.day>({
//   type: 'addDay',
//   payload: 1
// })

// function test1(a: number) {
//   return a + 1
// }

// function test2(a: number) {
//   return a + 100
// }

// console.log(
//   compose(
//     test1,
//     test2
//   )(1)
// )

const state = createState({ count: 0 })

state.subscribe(() => console.log(state.getState().count))

state.dispatch('count', 1)

state.dispatch((dispatch, getState) =>
  setTimeout(() => dispatch('count', getState().count + 1))
)

const delay = (time: number) => new Promise(res => setTimeout(res, time))

state.dispatch(async (dispatch, getState) => {
  await delay(500)
  setTimeout(() => dispatch('count', getState().count + 1))

  return { count: getState().count }
})
