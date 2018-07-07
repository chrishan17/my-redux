import { combineReducers } from '../redux'
import helloReducer from './helloReducer'
import worldReducer from './worldReducer'

export default combineReducers({
  hello: helloReducer,
  world: worldReducer
})
