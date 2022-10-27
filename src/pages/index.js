import * as React from "react";
import Hero from "../components/Hero";
import GlobalStyles from "../components/styles/Global";

const IndexPage = () => {
  return (
    <main>
      <GlobalStyles />
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Corbin Cargil</title>;
