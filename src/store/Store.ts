/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:46
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-04 14:46:46
 */
// 构建工具
import { createStore } from 'redux'
import { combineReducers } from 'redux'
// action
import * as reducers from '../reducers/Reducers'

// 创建store
export let store = createStore(combineReducers(reducers))
