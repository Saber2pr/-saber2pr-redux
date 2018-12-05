/*
 * @Author: AK-12
 * @Date: 2018-12-05 12:46:07
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-05 13:14:16
 */
/**
 * IReducer接口
 * 依赖：redux/Reducer, IState, IAction
 */
import { Reducer } from 'redux'
import { IState } from './IState'
import { IAction_default } from './IAction'
/**
 *Reducer_default
 *
 * @export
 * @interface Reducer
 * @extends {Reducer<IState['none'], IAction_default>}
 */
export interface IReducer_default
  extends Reducer<IState['none'], IAction_default> {}
