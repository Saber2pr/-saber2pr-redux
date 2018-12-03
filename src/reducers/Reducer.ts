/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:38:12
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-03 23:54:59
 * @discript: 存放reducers的空间
 */
/// <reference path="../types/Types.d.ts" />
// 初始state
export let _state: Types.IState = { value: 0 }

// reducers
let action_add: Types.IReducer = (
  state: Types.IState,
  action: Types.IAction
): Types.IState => ({ value: state.value + action.value })

let action_reduce: Types.IReducer = (
  state: Types.IState,
  action: Types.IAction
): Types.IState => ({ value: state.value - action.value })

let action_update: Types.IReducer = (
  state: Types.IState,
  action: Types.IAction
): Types.IState => ({
  value: action.value
})

// map
export let action = (
  state: Types.IState = _state,
  action: Types.IAction
): Types.IState => {
  switch (action.type) {
    case 'add':
      return action_add(state, action)
    case 'reduce':
      return action_reduce(state, action)
    case 'update':
      return action_update(state, action)
    default:
      return state
  }
}
