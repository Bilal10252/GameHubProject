import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardsContainer = ({ children }: Props) => {
  return (
    <>
      <Box  borderRadius={6} overflowX={"hidden"}>
        {children}
      </Box>
    </>
  );
};

export default GameCardsContainer;
