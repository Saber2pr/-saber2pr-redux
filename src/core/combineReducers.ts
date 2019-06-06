/*
 * @Author: saber2pr
 * @Date: 2019-06-06 20:01:23
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-06 20:01:23
 */
import { ReducersMapObject, Action, AnyAction } from './type'

export const combineReducers = <S, A extends Action = AnyAction>(
  reducers: ReducersMapObject<S, A>
) => (state: S, action: A) =>
  (Object.keys(reducers) as (keyof S)[]).reduce(
    (nextState, key) =>
      Object.assign(nextState, {
        [key]: reducers[key](state[key], action)
      }),
    {} as S
  )
