import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ method, url, data = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

//   const baseURL = 'http://localhost:';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios({
          method,
          url,
          data,
          headers,
        });
        setResponse(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, data, headers]);

  return { response, error, loading };
};

export default useAxios;
