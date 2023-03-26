// components
import Features from "@/modules/home/features";
import Description from "@/modules/home/description";
import ExampleCode from "@/modules/home/exampleCode";

import Resources from "@/modules/home/resources";
import ApiRoutes from "@/modules/home/apiRoutes";



const Landing = () => {
  return (
    <>
      <Features />
      <Description />
      <ExampleCode />
      <Resources />
      <ApiRoutes />
    </>
  );
};

export default Landing;
