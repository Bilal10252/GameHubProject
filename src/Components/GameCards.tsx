import React from 'react'
import { game } from '../Hooks/useGame';
import { Card, Heading, Image } from '@chakra-ui/react';

interface Props{
    game : game;
}
const GameCards = ({game}: Props) => {
  return (
    <>
        <Card borderRadius={6} overflow={'hidden'}>
            <Image src={game.background_image} marginBottom={4}></Image>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </Card>
    </>
  )
}

export default GameCards
