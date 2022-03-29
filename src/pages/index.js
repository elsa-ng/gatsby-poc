import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Head shot of Timmy from Animal Crossing."
        src="../images/timmy_1.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
