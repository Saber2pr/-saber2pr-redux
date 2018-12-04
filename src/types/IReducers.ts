/*
 * @Author: AK-12
 * @Date: 2018-12-04 14:46:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-04 15:14:34
 */
// reducer
export interface IReducer<S, A> {
  (state: S, action: A): S
}
