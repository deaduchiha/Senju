import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ApiRoutes = () => {
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
