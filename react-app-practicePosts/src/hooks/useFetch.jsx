import { useState, useEffect } from 'react';

export default function useFetch({url,method}) {
  const [fetchUrl, setFetchUrl] = useState(url);

  useEffect(() => {
    setFetchUrl(url);
  }, [url]);

  const getFetch = async () => {
    const response = await fetch(fetchUrl, {
      method,
      headers: {'content-type':'application/json'}
    });
    if(response.ok){
        return await response.json()
    }

  };

  return { getFetch, fetchUrl };
}
