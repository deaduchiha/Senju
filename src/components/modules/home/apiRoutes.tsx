import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ApiRoutes = () => {
  type routesName = Map<string, string>;
  const routes: routesName = new Map([
    ["GET", "/anime"],
    ["GET", "/anime/naruto"],
    ["GET", "/characters"],
    ["GET", "/characters/1"],
    ["GET", "/characters?limit=10"],
    ["POST", "/anime"],
    ["DELETE", "/anime/naruto"],
    ["PUT", "/characters/1"],
    ["PATCH", "/characters/1"],
    ["DELETE", "/characters/1"],
  ]);
  return (
    <Box>
      <Heading as="h3" size="md">
        Routes
      </Heading>
      <Text mt={3} mb={4} color="#615B6D">
        All HTTP methods are supported
      </Text>
    </Box>
  );
};

export default ApiRoutes;
