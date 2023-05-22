import React from "react";
import { game } from "../Hooks/useGame";
import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import GameCritic from "./GameCritic";
import optimizedImage from "../Services/OptimizedImages";

interface Props {
  game: game;
}
const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={6} overflowX={"hidden"} width={"280px"}>
        <Image src={optimizedImage(game.background_image)} marginBottom={4} ></Image>
        <Heading fontSize={"2xl"} paddingX={3}>{game.name}</Heading>
        <HStack justifyContent="space-between" padding={3}>
        <PlatformIcons platform={game.parent_platforms.map(plaform => plaform.platform)}></PlatformIcons>
        <GameCritic metacritic={game.metacritic}></GameCritic>
        </HStack>
        
      </Card>
    </>
  );
};

export default GameCards;
