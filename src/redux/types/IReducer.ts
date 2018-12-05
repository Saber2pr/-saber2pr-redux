/*
 * @Author: AK-12
 * @Date: 2018-12-05 12:46:07
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-05 23:31:09
 */
/**
 * IReducer接口
 * 依赖：redux/Reducer, IState, IAction
 */
import { IState } from './IState'
import { IAction_default } from './IAction'
import { AnyAction } from './saber-redux'

export interface Reducer<S = any, A = AnyAction> {
  (state: S, action: A): S
}
/**
 *Reducer_default
 *
 * @export
 * @interface Reducer
 * @extends {Reducer<IState['none'], IAction_default>}
 */
export interface IReducer_default
  extends Reducer<IState['none'], IAction_default> {}
