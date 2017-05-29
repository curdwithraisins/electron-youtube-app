import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVideo } from '../actions/videos'
import VideoPage from '../components/VideoPage'

class Video extends Component {
  componentWillMount () {
    this.props.getVideo(this.context.router.location.pathname.split('/video/')[1]);
  }

  render () {
    const {currentVideo} = this.props;

    return (
      <div className="video-page">
          {currentVideo && currentVideo.id ? <VideoPage currentVideo={ currentVideo } /> : null}
      </div>
    )
  }
}

Video.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateTopProps = (state) => ({
  currentVideo: state.getVideos.currentVideo
})

export default connect(mapStateTopProps, { getVideo })(Video)