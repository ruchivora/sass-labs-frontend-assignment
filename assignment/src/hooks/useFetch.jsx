import { useState, useEffect } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    function fetchData() {
      fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      });
    }
    fetchData();
    
  }, []);

  return { data, loading, error };
}