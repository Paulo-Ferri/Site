import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ project }) => {
  return(
    <ReactPlayer
      className="video_player"
      width="80%"
      height="85%"
      url={project}
      volume="0.33"
      controls="true"
  />
  )
};

export default VideoPlayer