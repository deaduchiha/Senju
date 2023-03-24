import React from "react";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        gap={{ base: 5, md: "inherit" }}
      >
        <Box userSelect="none" textAlign={{ base: "center", md: "inherit" }}>
          <Heading>
            SENJU <br /> Fake anime API
          </Heading>
          <Button colorScheme="senju" cursor="default">
            fake anime api for testing and prototyping
          </Button>
        </Box>
        <Box>
          <Image src="kurama.svg" alt="kurama" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
