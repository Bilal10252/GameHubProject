import React from "react";
import { game } from "../Hooks/useGame";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: game;
}
const GameCards = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={6} overflow={"hidden"}>
        <Image src={game.background_image} marginBottom={4}></Image>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcons platform={game.parent_platforms.map(plaform => plaform.platform)}></PlatformIcons>
        
      </Card>
    </>
  );
};

export default GameCards;
