import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ApiChecking = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const server = "https://api.coingecko.com/api/v3"; // Base API URL

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const result = await fetch(`${server}/coins/${params.id}`);
        const data = await result.json();
        setCoin(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoin();
  }, [params.id]); // Fetch whenever params.id changes

  return (
    <div>
      {/* Display fetched data here */}
      {JSON.stringify(coin, null, 2)}
    </div>
  );
};

export default ApiChecking;
