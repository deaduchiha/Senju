// chakra ui
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
          <Text
            bg="#f49700"
            color="#fff"
            p={1}
            borderRadius={5}
            cursor="default"
          >
            fake anime api for testing and prototyping
          </Text>
        </Box>
        <Box>
          <Image src="kurama.svg" alt="kurama" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
