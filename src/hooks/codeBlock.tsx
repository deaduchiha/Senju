// react
import { useEffect, useState } from "react";
// prism
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
//chakra ui
import { Box } from "@chakra-ui/react";

const useCodeBlock = (language: string, code: string) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const html = Prism.highlight(code, Prism.languages[language], language);
    setHighlightedCode(html);
  }, [language, code]);

  return (
    <Box
      borderRadius={5}
      as="pre"
      whiteSpace="pre-wrap"
      bg={"#1F2229"}
      color="#fff"
      p={5}
      mt={2}
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </Box>
  );
};

export default useCodeBlock;
