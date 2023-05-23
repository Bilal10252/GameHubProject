import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";

export interface genre {
  id: number;
  name: string;
  image_background: string;
}

interface genreResp {
  count: number;
  results: genre[];
}

let useGenres = () => {
  return useData<genre>("/genres");
};

export default useGenres;
