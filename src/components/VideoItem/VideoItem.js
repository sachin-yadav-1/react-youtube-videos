import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videoId, title, channel, description, thumbnail, onVideoClick }) => {
  const onVideoSelect = () => {
    onVideoClick({ title, description, videoId });
  };
  return (
    <div className="video-item" onClick={onVideoSelect}>
      <img src={thumbnail} className="video-item__thumbnail" />
      <div className="video-item__description">
        <h2>{title}</h2>
        <p className="text-s">{description}</p>
        <p className="text-xs">{channel}</p>
      </div>
    </div>
  );
};

export default VideoItem;
