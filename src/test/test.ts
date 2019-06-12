import { store } from './store'
import { A } from './action'
import { compose, createState } from '..'

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

const state = createState({ age: 0 })

state.subscribe(() => console.log(state.getState().age))

state.dispatch((dispatch, getState) =>
  setTimeout(() => dispatch('age', getState().age + 1))
)
