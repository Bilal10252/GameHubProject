import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const LoadingGenreSkeleton = () => {
  return (
    <>
      <List>
        <ListItem>
          <HStack paddingY={1.5}>
            <Skeleton boxSize={"42px"} borderRadius={"6px"}></Skeleton>
            <SkeletonText  paddingX={3} noOfLines={1} spacing='4' skeletonHeight='2'>testing</SkeletonText>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default LoadingGenreSkeleton;
