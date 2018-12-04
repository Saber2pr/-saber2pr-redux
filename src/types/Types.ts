/*
 * @Author: AK-12
 * @Date: 2018-12-04 15:21:31
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 15:24:23
 */
import { IState } from './IState'
import * as _IAction from './IAction'
import * as _IReducer from './IReducers'
// IState
export { IState } from './IState'
// IAction
export interface IAction<T = 'default', V = string>
  extends _IAction.IAction<T, V> {}
// IReducer
export interface IReducer<S = IState, A = IAction>
  extends _IReducer.IReducer<S, A> {}
