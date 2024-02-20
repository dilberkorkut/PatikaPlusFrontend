import { useState, useEffect } from "react";
export const useAsyncState = (initialState, fetcher, config, asyncState) => {
  const [data, setData] = useState(initialState);
  const [status, setStatus] = useState("idle");

  useEffect(() => {

    setStatus("loading");
    fetcher()
      .then((res) => {
        const mappedValue = config?.mapper?.(res) || res;
        config?.onSuccess?.(res);
        setData(mappedValue);
      })
      .catch((error) => {
        config?.onError?.(error);
      })
      .finally(() => {
        config?.onFinally?.();
        setStatus("idle");
      });
  }, [fetcher.toString()]);

  return {
    data,
    setData,
    status,
    isLoading: status === "loading",
    isIdle: status === "idle",
  };
};
