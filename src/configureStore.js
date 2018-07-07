import { createStore } from './redux'
import rootReducers from './reducers/index'

const store = createStore(rootReducers)

const originDispatch = store.dispatch

store.dispatch = action => {
  if (typeof action === 'function') {
    action(originDispatch)
  } else {
    originDispatch(action)
  }
}

const lastDispatch = store.dispatch
store.dispatch = action => {
  if (typeof action.then === 'function') {
    action.then(lastDispatch)
  } else {
    lastDispatch(action)
  }
}

export default () => store
