import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import CodeBlock from "@/constant/prism/codeBlock";
import { exampleCode } from "@/constant/prism/code";

const ExampleCode = () => {
  return (
    <Box my={10}>
      <Heading as="h3">Example Code</Heading>
      <CodeBlock language="javascript" code={exampleCode} />
    </Box>
  );
};

export default ExampleCode;
