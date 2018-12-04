/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 14:48:53
 */
import { IState } from './IState'
import { IAction, IAction_Type_Default } from './IAction'

// reducer
export interface IReducer<
  S = IState,
  A = IAction<IAction_Type_Default, string>
> {
  (state: S, action: A): S
}
