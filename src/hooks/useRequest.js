import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (token, url) => {
  const [response, setResponse] = useState({});
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
        const res = await axios.get(url, config);
        if (!ignore) setResponse(res.data);
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

  return { response, loading, error };
};

export default useRequest;
