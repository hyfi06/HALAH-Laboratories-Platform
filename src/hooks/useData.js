import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (token, url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const getUsers = async () => {
      setLoading(true);
      try {
        setError(null);
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(url, config);
        if (!ignore) setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    getUsers();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useData;
