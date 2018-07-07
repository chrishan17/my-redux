import { createStore, applyMiddleware } from './redux'
import rootReducers from './reducers/index'

const thunkMiddleware = store => dispatch => action => {
  if (typeof action === 'function') {
    action(dispatch)
  } else {
    dispatch(action)
  }
}

const promiseMiddleware = store => dispatch => action => {
  if (typeof action.then === 'function') {
    action.then(dispatch)
  } else {
    dispatch(action)
  }
}

const preloadedState = {}

const store = createStore(
  rootReducers,
  preloadedState,
  applyMiddleware(thunkMiddleware, promiseMiddleware)
)

export default () => store
