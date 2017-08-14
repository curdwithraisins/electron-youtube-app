import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getNewVideos, getMoreVideos } from '../actions/videos'
import VideoPreview from '../components/VideoPreview'

class Root extends Component {
  componentWillMount () {
    this.props.getNewVideos({});
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll () {
    if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
      this.props.getMoreVideos({ query: this.props.query, pageToken: this.props.pageToken });
    }
  }

  getVideo (i) {
    if (this.props.videos[i].id.videoId) {
      this.props.router.push(`/video/${this.props.videos[i].id.videoId}`);
    }
  }

  render () {
    const { videos } = this.props;

    return (
      <div className="videos-list">
        {videos.length ? videos.map((video, key) => VideoPreview(key, video.snippet, this.getVideo.bind(this))) : null}
      </div>
    )
  }
}

const mapStateTopProps = (state) => ({
  videos: state.getVideos.videos,
  count: state.getVideos.count,
  pageToken: state.getVideos.pageToken,
  query: state.getVideos.query
})

export default connect(mapStateTopProps, { getNewVideos, getMoreVideos })(Root)
