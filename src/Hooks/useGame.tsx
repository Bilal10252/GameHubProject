import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { genre } from "./useGenres";
import { PlatformObj } from "./usePlatform";
import { gameQuery } from "../App";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

export interface platform {
  id: number;
  name: string;
  slug: string;
}

interface gameFetch {
  count: number;
  results: game[];
}
let useGame = (
  GameQuery: gameQuery
) => {
  return useData<game>(
    "/games",
    {
      params: {
        genres: GameQuery.genre?.id,
        platforms:GameQuery.platform?.id,
        ordering: GameQuery.sortOrder,
        search: GameQuery.searchResult
      },
    },
    [GameQuery],
    

   
  );
};

export default useGame;
