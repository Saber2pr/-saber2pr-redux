/*
 * @Author: AK-12
 * @Date: 2018-12-05 12:46:07
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 12:58:50
 */
/**
 * IReducer接口
 * 依赖：redux/Reducer, IState, IAction
 */
import { IState } from './IState'
import { IAction_default } from './IAction'
import { Reducer } from './saber-redux'

/**
 *Reducer_default
 *
 * @export
 * @interface Reducer
 * @extends {Reducer<IState['none'], IAction_default>}
 */
export interface IReducer_default
  extends Reducer<IState['none'], IAction_default> {}
