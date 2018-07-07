let rootReducer
let storeState
let rootListener

const createStore = (reducer, preloadedState = {}, enhancer) => {
  rootReducer = reducer
  storeState = preloadedState

  const store = {
    dispatch: dispatch,
    getState: getState,
    subscribe: subscribe
  }

  init()

  return enhancer(store)
}

const init = () => {
  dispatch({
    type: '@INIT'
  })
}

const getState = () => {
  return storeState
}

const dispatch = action => {
  console.log(action)
  storeState = rootReducer(storeState, action)
  rootListener && rootListener()
}

const subscribe = listener => {
  rootListener = listener
  return {
    remove() {
      listener = null
    }
  }
}

const combineReducers = reducers => {
  return (state, action) => {
    return Object.entries(reducers).reduce((sum, next) => {
      sum[next[0]] = next[1](state[next[0]], action)
      return sum
    }, {})
  }
}

const applyMiddleware = (...middlewares) => {
  return store => {
    middlewares
      .slice(0)
      .reverse()
      .forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch)
      })
    return store
  }
}

export { createStore, combineReducers, applyMiddleware }
