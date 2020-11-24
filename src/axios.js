import axios from "axios";

/*Base URL Makes request to the Server API*/
const instance = axios.create({
  baseURL: "https://resume-builder-i4g.herokuapp.com",
});

export default instance;
