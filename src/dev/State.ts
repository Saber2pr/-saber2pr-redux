/*
 * @Author: AK-12
 * @Date: 2018-12-04 15:12:29
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 16:27:45
 * @discript: state树
 */
import * as Types from '../types/Types'

export let State: Types.IState = {
  title: { content: '' },
  text: {
    head: '',
    foot: ''
  },
  infor: {
    name: '',
    message: {
      p1: '',
      p2: ''
    }
  }
}
