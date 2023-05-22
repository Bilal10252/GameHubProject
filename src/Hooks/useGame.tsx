import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: platform}[];
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

  useEffect(() => {
    let Controller = new AbortController();
    ApiClient.get<gameFetch>("/games", { signal: Controller.signal })
      .then((res) => setGame(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) {
          return null;
        } else {
          setError(error.message);
        }
      });
      return () => {
        Controller.abort();
    }
   

  }, []);
  return { game, error };
};

export default useGame;
