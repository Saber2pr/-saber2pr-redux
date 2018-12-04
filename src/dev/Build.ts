/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 15:11:44
 * @discript: 创建store
 */
// 构建工具
import { createStore } from 'redux'
import { combineReducers } from 'redux'
// reducers
import * as reducers from '../dev/Reducers'

// 创建store
export let $Store = createStore(combineReducers(reducers))
