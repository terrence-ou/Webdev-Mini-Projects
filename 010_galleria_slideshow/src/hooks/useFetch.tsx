import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "../firebaseConfig";

type errorType = {
  message: string;
};

const useFetch = (path: string) => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [error, setError] = useState<errorType | undefined>();
  const [url, setURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    const pathReference = ref(storage, path);
    setFetching(true);
    getDownloadURL(pathReference)
      .then((url) => {
        setFetching(false);
        setURL(url);
      })
      .catch((err) => {
        setError({ message: err.message || "Failed to fetch data" });
      });
  }, [path]);

  return { fetching, error, url };
};

export default useFetch;
