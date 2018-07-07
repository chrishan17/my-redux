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

export default () => store
