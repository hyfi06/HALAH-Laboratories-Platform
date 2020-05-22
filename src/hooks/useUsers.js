import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = (token) => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const getUsers = async () => {
      setLoading(true);
      try {
        setError(null);
        const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/`;
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(URL, config);
        if (!ignore) setUsers(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    getUsers();
    return () => {
      ignore = true;
    };
  }, [token]);

  return { users, loading, error };
};

export default useUsers;
