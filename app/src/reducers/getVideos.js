import actionTypes from '../actions/actions.types'

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
      return { ...state, ...action }
    case actionTypes.SEARCH_VIDEO:
      return { ...state, ...action }
    case actionTypes.CLEAR_VIDEO:
      return { ...initialState, ...action }
    case actionTypes.MORE_VIDEOS:
      return { ...state, videos: [ ...state.videos, ...action.videos ] }
    case actionTypes.GET_VIDEO:
      return { ...state, ...action }
    default:
      return state
  }
}
