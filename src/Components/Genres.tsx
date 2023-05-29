import React from "react";
import useGenres, { genre } from "../Hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
  color,
} from "@chakra-ui/react";
import optimizedImage from "../Services/OptimizedImages";
import useData from "../Hooks/useData";

interface Props {
  selectedGenre: (genre: genre) => void;
  seletedGenreForColor: genre | null;
}

const Genres = ({ selectedGenre ,seletedGenreForColor}: Props) => {
  let { data, error } = useGenres();
  return (
    <>
      {error && null}
      <Heading marginBottom={3} fontSize={"3xl"}>Genres</Heading>

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                src={optimizedImage(genre.image_background)}
                boxSize={"42px"}
                borderRadius={"6px"}
              ></Image>
              
              <Button
                fontSize={"17px"}
                paddingX={3}
                fontWeight={genre.id===seletedGenreForColor?.id ? "bold" : "normal"  }
                onClick={() => {
                  selectedGenre(genre);
                  
                }}
                variant="link"
                
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
