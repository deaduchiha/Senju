// chakra ui
import { Box, Heading, Text } from "@chakra-ui/react";

const HowToUse = () => {
  return (
    <Box mt="60" id="section1">
      <Heading color="#f49700" mb={2} as="h2" size="md">
        How to use it
      </Heading>
      <Text w={{ base: "full", md: "md" }} color="#615B6D" textAlign="justify">
        Senju api can be used for anime lovers need an api for prototyping,
        testing and etc... in JSON format. you can use examples below to check
        how Senju api works and feel free to enjoy it in your awesome projects!
      </Text>
    </Box>
  );
};

export default HowToUse;
