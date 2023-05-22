import React, { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardsContainer from "./GameCardsContainer";

const GameGrid = () => {
  let { game, error, isloading } = useGame();
  let skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={3} padding={5}>
        {isloading &&
          skeletonNumber.map((skeleton ) => <GameCardsContainer><LoadingSkeleton key={skeleton}></LoadingSkeleton></GameCardsContainer>)}
        {game.map((g) => (
          <GameCardsContainer><GameCards game={g} key={g.id}></GameCards></GameCardsContainer>
        ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
