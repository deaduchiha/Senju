import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const html = Prism.highlight(code, Prism.languages[language], language);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

export default CodeBlock;
