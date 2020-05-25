import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (token, url, count) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const getData = async () => {
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
    if (count) {
      getData();
    }
    return () => {
      ignore = true;
    };
  }, [url, count]);

  return { response, loading, error };
};

export default useRequest;
