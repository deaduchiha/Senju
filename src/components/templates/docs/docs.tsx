// layout
import DocsLayout from "@/modules/docs/layout/docsLayout";
// components
import HowToUse from "@/modules/docs/howToUse";
import TutorialList from "@/modules/docs/tutorial";

const Docs = () => {
  return (
    <DocsLayout>
      <HowToUse />
      <TutorialList />
    </DocsLayout>
  );
};

export default Docs;
