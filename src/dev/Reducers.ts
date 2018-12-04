/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:38:12
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 16:46:24
 * @discript: 存放reducers的空间
 */
import * as Types from '../types/Types'
import * as Actions from './Actions'
import { State } from './State'

// none reducer
export let none: Types.IReducer<
  Types.IState['none'],
  Types.IAction<Actions.Default>
> = (state = State.none, action) => {
  switch (action.type) {
    case 'default':
      return { value: state.value + action.value }
    default:
      return state
  }
}
