import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box w="85%" my={8}>
        <Heading as="h2" fontSize="1.6rem">
          Get tired of Lorem ipsum data?!
        </Heading>
        <Heading
          as="h3"
          fontSize="1.2rem"
        >{`didn't you find any anime API!?!`}</Heading>
        <Text mt={2} color="#615B6D">
          {`SENJU fake api is a free online REST API that you can use whenever you
          need. It's awesome for teaching purposes, sample codes, tests, etc.`}
        </Text>
      </Box>
    </Flex>
  );
};

export default Description;
