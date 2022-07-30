import React from "react";
import Videos from "../Videos/Videos";
import SearchBar from "./../SearchBar/SearchBar";
import useSearchVideos from "../../hooks/useSearchVideos";
import Route from "./../Route/Route";

const App = () => {
  const [videos, search] = useSearchVideos("cats");

  return (
    <>
      <Route path="/">
        <p>HOME SCREEN</p>
      </Route>
      <Route path="/videos">
        <SearchBar onFormSubmit={search} />
        <Videos videos={videos} />
      </Route>
    </>
  );
};

export default App;
