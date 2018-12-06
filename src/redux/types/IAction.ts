/*
 * @Author: AK-12
 * @Date: 2018-12-05 12:46:04
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 12:59:00
 */
/**
 * IAction接口
 * 依赖：redux/Action, IAction_type
 */
import { Type_default } from './IAction_type'
import { Action } from './saber-redux'
/**
 *IAction
 *
 * @export
 * @interface IAction
 * @extends {Action<keyof Default>}
 */
export interface IAction<T, V = string> extends Action<keyof T> {
  value: V
}
/**
 *IAction_default
 *
 * @export
 * @interface IAction_default
 * @extends {IAction<Type_default>}
 */
export interface IAction_default extends IAction<Type_default> {}
