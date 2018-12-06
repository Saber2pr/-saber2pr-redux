/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:38:12
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-06 13:54:12
 * @discript: 存放reducers的空间
 */
import { State } from './State'
import { IReducer_default } from '../types/Types'

// none reducer
export let none: IReducer_default = (
  state = State['none'],
  action = { type: 'default', value: '' }
) => {
  switch (action.type) {
    case 'default':
      return { value: state.value + action.value }
    default:
      return state
  }
}
