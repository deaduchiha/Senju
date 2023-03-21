import React from "react";
import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";

const Features = () => {
  return (
    <Container mt={10} maxW="container.lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Heading>
            SENJU <br /> Fake anime API
          </Heading>
        </Box>
        <Box>
          <Image src="kurama.svg" alt="kurama" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Features;
