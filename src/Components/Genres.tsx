import React from "react";
import useGenres from "../Hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import optimizedImage from "../Services/OptimizedImages";

const Genres = () => {
  let { genres, error } = useGenres();
  return (
    <>
      {error && null}

      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack >
              <Image src={optimizedImage(genre.image_background)} boxSize={"42px"} borderRadius={"6px"} ></Image>
              <Text fontSize={"17px"} paddingX={3}>{genre.name} </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
