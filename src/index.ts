/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:25:19
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-03 23:25:19
 */
// 构建工具
import { createStore } from 'redux'

// 状态结构 && 动作结构
declare namespace Types {
  // state
  export interface IState {
    value: number
  }
  // action type
  interface IAction_Type {
    add
    reduce
    update
  }
  // action: { type, value }
  export interface IAction {
    type: keyof IAction_Type
    value: number
  }
}

// 初始状态
let _state: Types.IState = { value: 0 }

// reducer(state, action)
let action = (
  state: Types.IState = _state,
  action: Types.IAction
): Types.IState => {
  switch (action.type) {
    case 'add':
      return { value: state.value + action.value }
    case 'reduce':
      return { value: state.value - action.value }
    case 'update':
      return { value: action.value }
    default:
      return state
  }
}

// 创建store
let store = createStore(action)

// 注册监听回调
store.subscribe(() => console.log(store.getState()))

// 发射action
store.dispatch({ type: 'add', value: 233 })

store.dispatch({ type: 'update', value: 23334 })

store.dispatch({ type: 'update', value: 0 })
