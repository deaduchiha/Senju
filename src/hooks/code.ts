import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";

interface UseCodeBlockProps {
  code: string;
  language: string;
}

const useCodeBlock = ({ code, language }: UseCodeBlockProps) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const html = Prism.highlight(code, Prism.languages[language], language);
    setHighlightedCode(html);
  }, [code, language]);

  return highlightedCode;
};

export default useCodeBlock;
