// react & next
import { useState } from "react";
// chakra ui
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
// hooks
import useCodeBlock from "@/hooks/codeBlock";
// constant
import { tutorial } from "@/constant/docsTitle";
import { exampleCode } from "@/constant/code";

const TutorialList = () => {
  const [highlightedCode, setHighlightedCode] = useState("");
  const handleCodeHighlight = (code) => {
    setHighlightedCode(code);
  };

  const renderTutorialItems = (type) => {
    return tutorial
      .filter((item) => item.type === type)
      .map((item) => (
        <Flex key={item.id} id={item.id} flexDirection="column" gap={2}>
          <Text fontSize="larger">{item.name}</Text>
          {highlightedCode && highlightedCode}
          <Button
            w="fit-content"
            colorScheme="docButton"
            onClick={() => handleCodeHighlight(exampleCode)}
          >
            Show output
          </Button>
        </Flex>
      ));
  };
  return (
    <>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Anime
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {renderTutorialItems("anime")}
      </Flex>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Characters
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {renderTutorialItems("characters")}
      </Flex>
    </>
  );
};

export default TutorialList;
