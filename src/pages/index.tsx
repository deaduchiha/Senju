// hooks
import useTitle from "@/hooks/pageTitle";

// components
import Landing from "@/templates/home/landing";

const Home = () => {
  useTitle("Senju | Free fake anime API");

  return <Landing />;
};

export default Home;
