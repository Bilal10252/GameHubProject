import React from "react";
import { game } from "../Hooks/useGame";
import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import GameCritic from "./GameCritic";
import optimizedImage from "../Services/OptimizedImages";
import Emojis from "./Emojis";

interface Props {
  game: game;
}
const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card >
        <Image src={optimizedImage(game.background_image)} marginBottom={3} ></Image>
        <HStack justifyContent="space-between" paddingX={3} marginBottom={.5}>
        <PlatformIcons platform={game.parent_platforms.map(plaform => plaform.platform)}></PlatformIcons>
        <GameCritic metacritic={game.metacritic}></GameCritic>
        </HStack>
        <Heading fontSize={"2xl"} whiteSpace={"normal"} paddingX={3} marginBottom={5}>{game.name} <Emojis game={game}></Emojis></Heading>
        
        
      </Card>
    </>
  );
};

export default GameCards;
