// chakra ui
import { Box, Heading } from "@chakra-ui/react";
// custom hooks
import useCodeBlock from "@/hooks/codeBlock";
// components
import { exampleCode } from "@/constant/code";

const ExampleCode = () => {
  const highlightedCode = useCodeBlock("javascript", exampleCode);

  return (
    <Box my={10}>
 landing
      <Heading as="h3" size="md">
        Example Code
      </Heading>

      <Heading as="h3">Example Code</Heading>
 main
      {highlightedCode}
    </Box>
  );
};

export default ExampleCode;
