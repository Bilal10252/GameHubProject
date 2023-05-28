import { Box, Flex, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import Genres from "./Components/Genres";
import useGenres, { genre } from "./Hooks/useGenres";
import LoadingGenreSkeleton from "./Components/LoadingGenreSkeleton";
import { useState } from "react";
import Platform from "./Components/Platform";
import { PlatformObj } from "./Hooks/usePlatform";
import { platform } from "./Hooks/useGame";
import Sorting from "./Components/Sorting";

export interface gameQuery {
  genre: genre | null;
  platform: PlatformObj | null;
  sortOrder: string | null;
  searchResult: string | null;
}

function App() {
  let { isloading } = useGenres();
  let genreSkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar search={(search) => setGameQuery({...gameQuery, searchResult: search})}></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"19px"}>
          {genreSkeletonArray.map(
            (genre) =>
              isloading && (
                <LoadingGenreSkeleton key={genre}></LoadingGenreSkeleton>
              )
          )}

          <Genres
            selectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            seletedGenreForColor={gameQuery.genre}
          ></Genres>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Flex paddingLeft={5} >
          <Box marginRight={3}>
          <Platform
            setSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          ></Platform>
          </Box>
          
          <Sorting selectedSortOrder={(sort) => {setGameQuery({...gameQuery, sortOrder: sort})}} choosenSort = {gameQuery.sortOrder}></Sorting>
        </Flex>

        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
