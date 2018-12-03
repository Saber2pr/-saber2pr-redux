/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:25:19
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-03 23:41:00
 */
import { store } from './store/Store'

// 监听回调
let listener = () => console.log(store.getState())
// 注册监听回调
store.subscribe(listener)

// 发射action
store.dispatch({ type: 'add', value: 233 })
store.dispatch({ type: 'update', value: 23334 })
store.dispatch({ type: 'update', value: 0 })
