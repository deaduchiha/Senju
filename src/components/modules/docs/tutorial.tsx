import { tutorial } from "@/components/constant/docsTitle";
import { Flex, Text } from "@chakra-ui/react";

const TutorialList = () => {
  return (
    <>
      <Flex flexDirection="column" gap={20}>
        {tutorial.map((item, index) => (
          <Text key={index} id={item.id} mb={10}>
            {item.name}
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default TutorialList;
