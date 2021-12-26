import React, { Component } from 'react'
const { ipcRenderer } = require('electron')

class VideoPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      src: `${props.currentVideo.id}?`,
      snippet: props.currentVideo.snippet,
      func: 'pauseVideo'
    }
  }

  componentDidMount () {
    ipcRenderer.on('play-stop', () => {
      //const offset = this.state.src.match('&autoplay=1')
      //let src = !offset ? this.state.src + '&autoplay=1' : this.state.src.slice(0, offset.index)
      // this.setState({ src: src })
      let iframe = document.getElementsByTagName('iframe')[0].contentWindow;
      let func = this.state.func === 'pauseVideo' ? 'playVideo' : 'pauseVideo';
      this.setState({ func: func })
      iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    // }
    });
  }

  render () {
    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${this.state.src}`}/>
        <div className="video-page-data">
          <div className="video-title">{this.state.snippet.title}</div>
          <div className="video-channelTitle">Channel: {this.state.snippet.channelTitle}</div>
          <div className="video-description">Description: {this.state.snippet.description}</div>
        </div>
      </div>
    )
  }
}

export default VideoPage