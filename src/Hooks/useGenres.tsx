import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";

interface genre {
  id: number;
  name: string;
  image_background: string;
}

interface genreResp {
  count: number;
  results: genre[];
}

let useGenres = () => {
  let [genres, setGenres] = useState<genre[]>([]);
  let [error, setError] = useState();
  let [isloading, setLoading] = useState(false);
  useEffect(() => {
    let controller = new AbortController();
    setLoading(true);

    ApiClient.get<genreResp>("/genres" , { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results), setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return null;
        } else {
          setError(err.message);
        };
        setLoading(false)
      }, );

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isloading };
};

export default useGenres;
