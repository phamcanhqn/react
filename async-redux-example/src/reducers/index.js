import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_REDDIT,
  INVALIDATE_REDDIT
} from '../actions'

const selectedReddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdateed: action.receiveAt
      }
    default: 
      return state
  }
}

const postsByReddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedReddit,
  postsByReddit
})

export default rootReducer