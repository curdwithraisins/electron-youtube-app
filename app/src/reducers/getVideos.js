import actionTypes from '../actions/actions.types'
import merge from 'lodash.merge'

const initialState = {
  currentVideo: {},
  videos: [],
  count: 10,
  pageToken: null,
  query: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOST_POPULAR:
      return merge({}, state, action)
    case actionTypes.SEARCH_VIDEO:
      return merge({}, state, action)
    case actionTypes.CLEAR_VIDEO:
      return merge({}, initialState, action)
    case actionTypes.MORE_VIDEOS:
      action.videos = state.videos.concat(action.videos)
      return merge({}, state, action)
    case actionTypes.GET_VIDEO:
      return merge({}, state, action)
    default:
      return state
  }
}