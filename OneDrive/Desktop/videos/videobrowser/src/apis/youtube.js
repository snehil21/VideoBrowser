import axios from "axios";

const KEY = "AIzaSyBh7rKHx5CsyKZQe7egb6pXifJxKqhM0e4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
