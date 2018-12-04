/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:30
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-04 14:46:30
 */
// action
export interface IAction<T, V> {
  type: keyof T
  value: V
}
// action type
export interface IAction_Type_Default {
  default
}
