# @saber2pr/redux

> Simplify of Redux in Typescript.

> 内置支持 thunk.

## Idea

没有 reducers 的 redux 了解下?
快速创建一个可观测 state 对象

```ts
const state = createState({ age: 0 })

state.subscribe(() => console.log(state.getState().age))

state.dispatch((dispatch, getState) =>
  setTimeout(() => dispatch('age', getState().age + 1))
)
```

```bash
# from npm
npm install @saber2pr/redux

# from github
git clone https://github.com/Saber2pr/-saber2pr-redux.git
```

# API

```ts
type A = {
  type: string
  payload: number
}

const store = createStore(combineReducers(reducers), State)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

const AsyAct: AsyncAction = ({ dispatch }) => {
  setTimeout(
    () =>
      dispatch<A>({
        type: 'index',
        payload: 233
      }),
    1000
  )
}

store.dispatch(AsyAct)

store.dispatch<A>({
  type: 'index',
  payload: 233
})
```

---

## start

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test
