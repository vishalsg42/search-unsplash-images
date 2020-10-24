import axios from 'axios';

console.log("process.env ", process.env);
export default axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_BASE_URL,
  headers: {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});


