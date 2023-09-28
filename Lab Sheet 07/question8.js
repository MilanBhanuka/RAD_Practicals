const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchDataFromApi() {
  try {
    const response = await axios.get(apiUrl);
    console.log('API Response:');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}
fetchDataFromApi();
