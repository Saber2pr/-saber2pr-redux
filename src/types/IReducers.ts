/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:33
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-04 14:46:33
 */
import { IAction, IAction_Type_Default } from './IAction'

// reducer
export interface IReducer<S = S, A = IAction<IAction_Type_Default, string>> {
  (state: S, action: A): S
}
