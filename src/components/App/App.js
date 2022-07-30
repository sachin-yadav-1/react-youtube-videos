import React from "react";
import Videos from "../Videos/Videos";
import SearchBar from "./../SearchBar/SearchBar";
import useSearchVideos from "../../hooks/useSearchVideos";

const App = () => {
  const [videos, search] = useSearchVideos("cats");

  return (
    <>
      <SearchBar onFormSubmit={search} />
      <Videos videos={videos} />
    </>
  );
};

export default App;
