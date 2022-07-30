import axios from "axios";

const KEY = "AIzaSyDHFhAz-o_sH63hnsAtj1o5uxzGt7-zS6o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
