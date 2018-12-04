/*
 * @Author: AK-12
 * @Date: 2018-12-03 23:38:12
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-03 23:54:59
 * @discript: 存放reducers的空间
 */
import * as Types from '../types/Types'
// 初始state
let _state: Types.IState = {
  title: { hello: '', content: '' },
  text: {
    head: 'head',
    foot: 'foot'
  }
}
// reducers
export let reducer_title: Types.IReducer<Types.IState['title']> = (
  state = _state.title,
  action
) => {
  switch (action.type) {
    case 'default':
      return { content: state.content + action.value, hello: '' }
    default:
      return state
  }
}

// reducers
export let reducer_text: Types.IReducer<Types.IState['text']> = (
  state = _state.text,
  action
) => {
  switch (action.type) {
    case 'default':
      return { head: state.head + action.value, foot: state.foot }
    default:
      return state
  }
}
