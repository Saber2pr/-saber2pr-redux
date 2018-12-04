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
import { message } from './reducers/infor/message'

// title reducer
export let title: Types.IReducer<
  Types.IState['title'],
  Types.IAction<Actions.Title>
> = (state = State.title, action) => {
  switch (action.type) {
    case 'reduce_title':
      return { content: state.content + action.value }
    default:
      return state
  }
}

// text reducer
export let text: Types.IReducer<
  Types.IState['text'],
  Types.IAction<Actions.Text>
> = (state = State.text, action) => {
  switch (action.type) {
    case 'reduce_head':
      return { head: state.head + action.value, foot: state.foot }
    case 'reduce_foot':
      return { head: state.head, foot: state.foot + action.value }
    default:
      return state
  }
}

// infor reducer
export let infor: Types.IReducer<
  Types.IState['infor'],
  Types.IAction<Actions.Infor>
> = (state = State.infor, action) => {
  switch (action.type) {
    case 'reduce_name':
      return { name: action.value, message: state.message }
    case 'reduce_message_p1':
      return { name: state.name, message: message(state.message, action) }
    case 'reduce_message_p2':
      return { name: state.name, message: message(state.message, action) }
    default:
      return state
  }
}
