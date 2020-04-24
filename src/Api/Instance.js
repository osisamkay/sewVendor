// import axios from 'axios';
// export default axios.create({
//   baseURL: 'http://35.178.37.45:5000/',
// });
import axios from 'axios';
export default axios.create({
  baseURL: 'http://35.178.37.45:5000/',
  timeout: 2000,
  headers: {'X-Custom-Header': 'foobar'},
});
