// react & next
import { useEffect, useState } from "react"; // import react hooks
// chakra ui
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
// hooks
import useCodeBlock from "@/hooks/codeBlock";
// constant
import { tutorial } from "@/constant/docsTitle";
import { exampleCode } from "@/constant/code";

type Tutorial = {
  id: string;
  name: string;
  type: string;
};

const TutorialList = (): JSX.Element => {
  const [animeTutorials, setAnimeTutorials] = useState<Tutorial[]>([]);
  const [characterTutorials, setCharacterTutorials] = useState<Tutorial[]>([]);
  const highlightedCode = useCodeBlock("javascript", exampleCode);

  useEffect(() => {
    const anime = tutorial.filter((item) => item.type === "anime");
    const characters = tutorial.filter((item) => item.type === "characters");

    setAnimeTutorials(anime);
    setCharacterTutorials(characters);
  }, []);

  return (
    <>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Anime
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {animeTutorials.map((item) => (
          <Flex key={item.id} id={item.id} flexDirection="column" gap={2}>
            <Text fontSize="larger">{item.name}</Text>
            {highlightedCode}
            <Button colorScheme="docButton" w="fit-content">
              show output
            </Button>
          </Flex>
        ))}
      </Flex>
      <Heading mt={20} mb={5} color="#f49700" size="md">
        Characters
      </Heading>
      <Flex flexDirection="column" gap={20}>
        {characterTutorials.map((item) => (
          <Flex key={item.id} id={item.id} flexDirection="column" gap={2}>
            <Text fontSize="larger">{item.name}</Text>
            {highlightedCode}
            <Button colorScheme="docButton" w="fit-content">
              show output
            </Button>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default TutorialList;
