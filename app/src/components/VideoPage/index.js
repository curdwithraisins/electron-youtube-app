import React, { Component } from 'react'
const { ipcRenderer } = require('electron')

class VideoPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      src: `${props.currentVideo.id}?`,
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
      <iframe src={`https://www.youtube.com/embed/${this.state.src}`}/>
    )
  }
}

export default VideoPage