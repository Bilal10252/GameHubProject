import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { genre } from "./useGenres";

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
let useGame = (selectedGenre: genre | null) => {
  return useData<game>("/games", {
    params: {
      genres: selectedGenre?.id,
    },
   
  },
  [selectedGenre?.id]);
};

export default useGame;
