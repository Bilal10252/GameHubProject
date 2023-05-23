import React, { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardsContainer from "./GameCardsContainer";
import { genre } from "../Hooks/useGenres";

interface Props{
    selectedGenre : genre | null;
}

const GameGrid = ({selectedGenre} : Props) => {
  let { data, error, isloading } = useGame(selectedGenre);
  let skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={3} padding={5}>
        {isloading &&
          skeletonNumber.map((skeleton ) => <GameCardsContainer key={skeleton}> <LoadingSkeleton ></LoadingSkeleton></GameCardsContainer>)}
        {data.map((g) => (
          <GameCardsContainer key={g.id}><GameCards game={g} ></GameCards></GameCardsContainer>
        ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
