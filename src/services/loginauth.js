import axios from "axios";
import "./configs";

// // Passing configuration object to axios
// const authLogin = async () => {
//     const configurationObject = {
//       method: 'get',
//       url: `${baseUrl}/api/users/1`,
//     };
//     const response = await axios(configurationObject);
//     console.log(response.data);
//   };
  

  // Invoking get method to perform a GET request
  const authLogin = async () => {
    const url = `${AUTH_URL}`;
    const response = await axios.get(url);
    console.log(response.data);
  };