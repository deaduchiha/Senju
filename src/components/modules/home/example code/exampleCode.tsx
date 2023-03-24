import React from "react";
import CodeBlock from "./codeBlock";
import { Box, Heading } from "@chakra-ui/react";
import { exampleCode } from "./code";

const ExampleCode = () => {
  return (
    <Box my={10}>
      <Heading as="h3">Example Code</Heading>
      <CodeBlock language="javascript" code={code} />
    </Box>
  );
};

export default ExampleCode;
