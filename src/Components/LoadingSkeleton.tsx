import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <>
      <Card width="280px" borderRadius={6} overflowX={"hidden"} >
        <Skeleton height={"230px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingSkeleton;
