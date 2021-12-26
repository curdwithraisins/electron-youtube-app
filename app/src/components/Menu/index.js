import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getNewVideos } from '../../actions/videos'

class Menu extends Component {
  constructor (props) {
    super(props);
    console.log(props);
  }

  goHome (e) {
    if (this.context.router.location.pathname !== '/') {
      this.context.router.push('/');
    }
  }

  searchVideos (e) {
    if (this.context.router.location.pathname !== '/') {
      this.context.router.push('/')
    }
    this.props.getNewVideos({query: e.currentTarget.value});
  }

  render () {
    return (
      <div className="menu">
        <div className="icon" onClick={this.goHome.bind(this)}></div>
        <div className="search">
          <input
            onKeyUp={this.searchVideos.bind(this)}
            placeholder="Search for cats"
          />
        </div>
      </div>
    )
  }
}

Menu.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateTopProps = (state) => ({
  videos: state.getVideos.videos,
  query: state.getVideos.query
})

export default connect(mapStateTopProps, { getNewVideos })(Menu)
