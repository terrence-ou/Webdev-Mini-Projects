import { useEffect } from "react";

function useInterval(callback: () => void, interval: number) {
  useEffect(() => {
    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, [callback, interval]);
}

export default useInterval;
