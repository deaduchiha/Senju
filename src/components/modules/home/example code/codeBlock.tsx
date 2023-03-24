import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css"; // Import the theme CSS file

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const html = Prism.highlight(code, Prism.languages[language], language);

  return (
    <pre className={`language-${language}`}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
};

export default CodeBlock;
