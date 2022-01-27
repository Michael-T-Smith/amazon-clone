import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b2a90.cloudfunctions.net/api" //API URL (cloud function)
  // http://localhost:5001/clone-b2a90/us-central1/api
});

export default instance;