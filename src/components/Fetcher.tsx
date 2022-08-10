import * as React from 'react';
import { useState } from 'react';

const [data, setData] = useState(null);
const [error, setError] = useState(null);

function Fetcher() {
  fetch('https://api.github.com/emojis')
    .then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      setData({ totalReactPackages: data.total });
      console.log(data);
    })
    .catch((error) => {
      setError({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    });
  return <div>qwe</div>;
}

export default Fetcher;
