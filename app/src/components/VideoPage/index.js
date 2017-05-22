import React from 'react'

const VideoPage = (currentVideo) => {
  return (
    <iframe src={`https://www.youtube.com/embed/${currentVideo.id}`} />
  )
}

export default VideoPage