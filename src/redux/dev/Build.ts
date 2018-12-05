/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-05 23:57:00
 * @discript: 创建store
 */
// 构建工具
// reducers
import * as reducers from './Reducers'
import { createStore, combineReducers } from '../types/saber-redux'

// 创建store
export let $Store = createStore(combineReducers(reducers))
