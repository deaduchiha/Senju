import React from "react";
import { Box, Button, Container, Flex, Heading, Image } from "@chakra-ui/react";

const Features = () => {
  return (
    <Container mt={10} maxW="container.lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Box userSelect="none">
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
    </Container>
  );
};

export default Features;
