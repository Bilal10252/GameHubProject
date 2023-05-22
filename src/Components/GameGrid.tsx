import React, { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import useGame from "../Hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";
import LoadingSkeleton from "./LoadingSkeleton";

const GameGrid = () => {
  let { game, error, isloading } = useGame();
  let skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={4} padding={5}>
        {isloading &&
          skeletonNumber.map((skeleton ) => <LoadingSkeleton key={skeleton}></LoadingSkeleton>)}
        {game.map((g) => (
          <GameCards game={g} key={g.id}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
