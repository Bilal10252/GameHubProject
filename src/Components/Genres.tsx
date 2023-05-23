import React from "react";
import useGenres, { genre } from "../Hooks/useGenres";
import { Button, HStack, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import optimizedImage from "../Services/OptimizedImages";
import useData from "../Hooks/useData";

interface Props{
    selectedGenre : (genre: genre) => void;
}

const Genres = ({selectedGenre} : Props) => {
  let { data, error } = useGenres();
  return (
    <>
      {error && null}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack >
              <Image src={optimizedImage(genre.image_background)} boxSize={"42px"} borderRadius={"6px"} ></Image>
              <Button fontSize={"17px"} paddingX={3} onClick={() => {selectedGenre(genre)}} variant="link">{genre.name} </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
