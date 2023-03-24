import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import useCodeBlock from "@/hooks/codeBlock";

import { exampleCode } from "@/constant/prism/code";

const ExampleCode = () => {
  const highlightedCode = useCodeBlock("javascript", exampleCode);
  return (
    <Box my={10}>
      <Heading as="h3">Example Code</Heading>
      {highlightedCode}
    </Box>
  );
};

export default ExampleCode;
