import actionTypes from './actions.types'
import { VideoList, Video } from '../api'

export function getNewVideos ({ query = '', pageToken = '' }) {
  return dispatch => {
    dispatch({type: actionTypes.CLEAR_VIDEO, videos: {}})
    VideoList({ query, pageToken })
      .subscribe(res =>
        dispatch({
          type: actionTypes.SEARCH_VIDEO,
          videos: res.items,
          query: query,
          pageToken: res.nextPageToken
        })
      );
  }
}

export function getMoreVideos ({ query = '', pageToken = '' }) {
  return dispatch => {
    VideoList({ query, pageToken })
      .subscribe(res =>
        dispatch({
          type: actionTypes.MORE_VIDEOS,
          videos: res.items,
          pageToken: res.nextPageToken
        })
      );
  }
}

export function getVideo (id) {
  return dispatch => {
    Video(id)
      .subscribe(res =>
        dispatch({
          type: actionTypes.GET_VIDEO,
          currentVideo: res.items[0]
        })
      );
  }
}