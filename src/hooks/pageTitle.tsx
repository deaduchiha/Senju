import { useEffect } from "react";
import Head from "next/head";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default useTitle;
