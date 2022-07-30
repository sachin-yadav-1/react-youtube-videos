import React, { useState } from "react";
import "./Videos.css";

import VideoPlayer from "./../VideoPlayer/VideoPlayer";
import VideoList from "../VideoList/VideoList";

const Videos = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  };

  return (
    <div className="videos">
      <VideoPlayer video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} selectedVideo={selectedVideo} />
    </div>
  );
};

export default Videos;
