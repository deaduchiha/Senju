import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css"; // Import the theme CSS file

import { Box } from "@chakra-ui/react";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const html = Prism.highlight(code, Prism.languages[language], language);

  return (
    <Box
      borderRadius={5}
      as="pre"
      whiteSpace="pre-wrap"
      bg={"#1F2229"}
      color="#fff"
      p={5}
      mt={2}
      // className={`language-${language}`}
    >
      <code
        // className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  );
};

export default CodeBlock;
