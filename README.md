# @saber2pr/redux

> Simplify of Redux in Typescript.

> 内置支持 thunk.

```bash
# from npm
npm install @saber2pr/redux

# from github
git clone https://github.com/Saber2pr/-saber2pr-redux.git
```

# API

```ts
const store = createStore(combineReducers(reducers), State)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

store.dispatch(({ dispatch }) => {
  setTimeout(
    () =>
      dispatch({
        type: 'index',
        payload: 233
      }),
    1000
  )
})

store.dispatch({
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
