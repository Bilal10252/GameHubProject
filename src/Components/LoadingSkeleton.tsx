import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardsContainer from "./GameCardsContainer";

const LoadingSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={"230px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingSkeleton;
