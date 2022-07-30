import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect, selectedVideo }) => {
  const onVideoClick = (data) => {
    onVideoSelect(data);
  };

  return (
    <div className={`video-list ${!selectedVideo && "full-width"}`}>
      {videos.length !== 0 && videos.map((video) => <VideoItem onVideoClick={onVideoClick} key={video.id.videoId} videoId={video.id.videoId} title={video.snippet.title} channel={video.snippet.channelTitle} description={video.snippet.description} thumbnail={video.snippet.thumbnails.default.url} />)}
      {!videos.length && <p>No videos to display. Please search by typing in searchbar!</p>}
    </div>
  );
};

export default VideoList;
