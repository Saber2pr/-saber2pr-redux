import { Action } from '../core'

export namespace A {
  interface PayloadAction<T, V> extends Action<T> {
    payload: V
  }

  export type month = PayloadAction<'addMonth' | 'subMonth', number>

  export type day = PayloadAction<'addDay' | 'subDay', number>
}
