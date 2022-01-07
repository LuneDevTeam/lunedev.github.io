import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube className='youtube-video' videoId="_HRxMod660c" opts={opts} onReady={this._onReady} />;
  }
}

export default YoutubeVideo;