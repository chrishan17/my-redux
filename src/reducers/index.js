import { combineReducers } from '../redux'
import helloReducer from './helloReducer'
import worldReducer from './worldReducer'
import personsReducer from './personsReducer'
import postsReducer from './postsReducer'

export default combineReducers({
  hello: helloReducer,
  world: worldReducer,
  persons: personsReducer,
  posts: postsReducer
})
