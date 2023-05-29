
import { gameQuery } from '../App'
import { Heading } from '@chakra-ui/react';

interface Props{
    gameQuery: gameQuery;
}
const GameHeading = ({gameQuery}: Props) => {

    let heading = `${gameQuery.platform ? gameQuery.platform.name : ""} ${gameQuery.genre ? gameQuery.genre.name : ""} Games `
  return (
    <>
    
    <Heading as="h1" marginBottom={5 }> {heading}</Heading>
    </>
  )
}

export default GameHeading
