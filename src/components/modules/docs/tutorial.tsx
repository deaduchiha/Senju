import { tutorial } from "@/components/constant/docsTitle";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import useCodeBlock from "@/hooks/codeBlock";
import { exampleCode } from "@/components/constant/code";

const TutorialList = () => {
  const highlightedCode = useCodeBlock("javascript", exampleCode);

  return (
    <>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Anime
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {tutorial.map((item, index) =>
          item.type === "anime" ? (
            <Flex key={index} id={item.id} flexDirection="column" gap={2}>
              <Text fontSize="larger">{item.name}</Text>
              {highlightedCode}
              <Button w="fit-content" colorScheme="docButton">
                show output
              </Button>
            </Flex>
          ) : (
            ""
          )
        )}
      </Flex>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Characters
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {tutorial.map((item, index) =>
          item.type === "characters" ? (
            <Flex key={index} id={item.id} flexDirection="column" gap={2}>
              <Text fontSize="larger">{item.name}</Text>
              {highlightedCode}
              <Button w="fit-content" colorScheme="docButton">
                show output
              </Button>
            </Flex>
          ) : (
            ""
          )
        )}
      </Flex>
    </>
  );
};

export default TutorialList;
