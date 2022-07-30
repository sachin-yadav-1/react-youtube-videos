import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ video }) => {
  return (
    <div className={`video-player ${!video && "hidden"}`}>
      <iframe className="video-player__view" width="560" height="315" src={`https://www.youtube.com/embed/${video && video.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <div className="video-player__description">
        <h2>{video && video.title}</h2>
        <p>{video && video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
