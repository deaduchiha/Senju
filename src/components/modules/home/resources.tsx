import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Resources = () => {
  type ResourceCount = Map<string, number>;
  const resources: ResourceCount = new Map([
    ["anime", 5],
    ["characters", 20],
  ]);

  return (
    <Box my={5}>
      <Heading as="h3" size="lg">
        Resources
      </Heading>
      <Text mt={3} mb={4} color="#615B6D">
        Senju api comes with 2 Resources
      </Text>
      {Array.from(resources).map(([name, quantity], index) => (
        <Flex
          key={index}
          w="md"
          justifyContent="space-between"
          fontFamily="Fira Sans"
        >
          <Button
            variant="link"
            fontWeight={0}
            colorScheme="senju"
            mb={2}
            as={Link}
            href={`/${name}`}
          >
            {name}
          </Button>
          {name === "anime" ? (
            <Text>{`${quantity} anime`}</Text>
          ) : (
            <Text>{`${quantity} characters`}</Text>
          )}
        </Flex>
      ))}
    </Box>
  );
};

export default Resources;
