/*
 * @Author: AK-12
 * @Date: 2018-12-04 16:47:08
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-04 16:47:08
 */
import * as Types from '../../../types/Types'
import * as Actions from '../../Actions'
import { State } from '../../State'

// infor_message reducer
export let message: Types.IReducer<
  Types.IState['infor']['message'],
  Types.IAction<Actions.Infor>
> = (state = State.infor.message, action) => {
  switch (action.type) {
    case 'reduce_message_p1':
      return { p1: state.p1 + action.value, p2: state.p2 }
    case 'reduce_message_p2':
      return { p1: state.p1, p2: state.p2 + action.value }
    default:
      return state
  }
}
