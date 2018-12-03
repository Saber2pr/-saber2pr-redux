// 构建工具
import { createStore } from 'redux'
// action
import { action } from '../reducers/Reducer'

// 创建store
export let store = createStore(action)
// 初始化store
store.dispatch({ type: 'update', value: 0 })
