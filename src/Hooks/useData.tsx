import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface fetchResp<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  url: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  let [data, setData] = useState<T[]>([]);
  let [error, setError] = useState();
  let [isloading, setLoading] = useState(false);
  useEffect(
    () => {
      let controller = new AbortController();
      setLoading(true);

      ApiClient.get<fetchResp<T>>(url, {
        signal: controller.signal,
        ...requestConfig
      })
        .then((res) => {
          setData(res.data.results), setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) {
            return null;
          } else {
            setError(err.message);
          }
          setLoading(false);
        });

      return () => {
        controller.abort();
      };
    },
    deps ? deps : []
  );

  return { data, error, isloading };
};

export default useData;
