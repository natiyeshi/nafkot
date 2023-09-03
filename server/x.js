const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://aeona3.p.rapidapi.com/',
  params: {
    text: '<REQUIRED>',
    userId: '12312312312'
  },
  headers: {
    'X-RapidAPI-Key': 'bf6a260c7fmshed030e91f5bc4d2p1b2f9ajsn03b4bd6f2b2b',
    'X-RapidAPI-Host': 'aeona3.p.rapidapi.com'
  }
};

const fetch = async () => {

    try {
        console.log("loading")
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetch()