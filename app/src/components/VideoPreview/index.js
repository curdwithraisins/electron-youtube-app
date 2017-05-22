import React, { Component, PropTypes } from 'react'
import { textSlice } from '../../utils'

const VideoPreview = (key, video, getVideo) => {
  return (
    <div key={key} className="video-block" onClick={() => getVideo(key)}>
      <div className="video-preview">
        <img src={ video.thumbnails.medium.url }/>
      </div>
      <div className="video-data">
        <div className="video-title">
          { textSlice(video.title) }
        </div>
        <div className="video-channelTitle">by <span className="author">{ video.channelTitle }</span></div>
        <div className="video-description">
          { textSlice(video.description) }
        </div>
      </div>
    </div>
  )
}

export default VideoPreview;