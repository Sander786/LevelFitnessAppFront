import { useState, useEffect } from 'react';

export const Post = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // console.log(result);
        setData(result);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(data)
} 