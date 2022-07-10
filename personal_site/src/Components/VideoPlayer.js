import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ project }) => {
  function getWindowDimensions() {
    const { outerWidth: width, outerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return(
    <ReactPlayer
      className="video_player"
      width={windowDimensions.width < 768 ? "95%" : windowDimensions.width >= 768 && windowDimensions.width < 960 ? "90%" :"70%"}
      height={windowDimensions.width < 768 ? "27%" : windowDimensions.width >= 768 && windowDimensions.width < 960 ? "60%" : "75%" }
      url={project}
      controls="true"
      playsinline="true"
  />
  )
};

export default VideoPlayer