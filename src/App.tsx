import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import Genres from "./Components/Genres";
import useGenres from "./Hooks/useGenres";
import LoadingGenreSkeleton from "./Components/LoadingGenreSkeleton";

function App() {
  let { isloading } = useGenres();
  let genreSkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"19px"}>
          {genreSkeletonArray.map(
            (genre) =>
              isloading && (
                <LoadingGenreSkeleton key={genre}></LoadingGenreSkeleton>
              )
          )}

          <Genres></Genres>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
