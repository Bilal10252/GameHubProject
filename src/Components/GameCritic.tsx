import { Badge, Text } from '@chakra-ui/react';
import React from 'react'

interface Props{
    metacritic : number;    
}
const GameCritic = ({metacritic} : Props) => { 
    let color = metacritic > 75 ?  "green" : metacritic > 60 ? "yellow" :metacritic > 50 ? "red" : "orange";
  return (
    <>
    <Badge paddingX={2} fontSize={"14px"} colorScheme={color}>{metacritic}</Badge>
    </>
  )
}


export default GameCritic
