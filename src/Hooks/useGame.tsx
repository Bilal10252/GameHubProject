import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: platform}[];
  metacritic: number;
}

export interface platform{
  id: number;
  name: string;
  slug: string;
}

interface gameFetch {
  count: number;
  results: game[];
}
let useGame = () => {
  let [game, setGame] = useState<game[]>([]);
  let [error, setError] = useState([]);
  let [isloading, setLoading] = useState(false);

  useEffect(() => {
    let Controller = new AbortController();
    setLoading(true);
    ApiClient.get<gameFetch>("/games", { signal: Controller.signal })
      .then((res) => {setGame(res.data.results), setLoading(false)})
      .catch((error) => {
        if (error instanceof CanceledError) {
          return null;
        } else {
          setError(error.message);
        };
        setLoading(false)
      },
      );
      return () => {
        Controller.abort();
    }
   

  }, []);
  return { game, error , isloading};
};

export default useGame;
