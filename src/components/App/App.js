import React, { useState } from "react";
import Videos from "../Videos/Videos";
import SearchBar from "./../SearchBar/SearchBar";
import youtube from "../../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);

  const onSearchTerm = async (searchTerm) => {
    const response = await youtube.get("/search", { params: { q: searchTerm } });
    setVideos(response.data.items);
  };

  return (
    <>
      <SearchBar onFormSubmit={onSearchTerm} />
      <Videos videos={videos} />
    </>
  );
};

export default App;
