// 状态结构 && 动作结构
declare namespace Types {
  // state
  export interface IState {
    value: number
  }
  // reducer type
  export interface IReducer {
    (state: Types.IState, action: Types.IAction): Types.IState
  }
  // action type
  interface IAction_Type {
    add
    reduce
    update
  }
  // action: { type, value }
  export interface IAction {
    type: keyof IAction_Type
    value: number
  }
}
