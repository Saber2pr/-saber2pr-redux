import {
  IReducers,
  createStore,
  combineReducers,
  IActions
} from '../core/saber-redux'

type IState = {
  state: 'enter' | 'out'
  index: number
}

const State: IState = {
  index: 0,
  state: 'out'
}

type Actions = IActions<IState>

const reducers: IReducers<IState> = {
  index: (state, action) => {
    switch (action.type) {
      case 'index':
        return action.value
      default:
        state
    }
  },
  state: (state, action) => {
    switch (action.type) {
      case 'state':
        return action.value
      default:
        state
    }
  }
}

const store = createStore(combineReducers(reducers), State)
store.subscribe(v => console.log(v))

export function test_saber_redux() {
  store.dispatch<Actions['index']>({ type: 'index', value: 100 })
}
