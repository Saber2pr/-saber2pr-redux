/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:36
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 16:28:02
 */
// state
export interface IState {
  title: {
    content: string
  }
  text: {
    head: string
    foot: string
  }
  infor: {
    name: string
    message: {
      p1: string
      p2: string
    }
  }
}
