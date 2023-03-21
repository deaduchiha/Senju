import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Features = () => {
  return (
    <Container my={20} maxW="container.lg">
      <Flex justifyContent="space-between"></Flex>
      <Box>
        <Heading>SENJU Fake anime API</Heading>
      </Box>
    </Container>
  );
};

export default Features;
