/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 13:51:34
 * @discript: 创建store
 */
// reducers
import * as reducers from './Reducers'
import { combineReducers, createStore } from '../types/saber-redux'

// 创建store
export let $Store = createStore(combineReducers(reducers))
