import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";

const About = () => {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
};

export default About;

export const Head = () => <title>About US - EMBDigitized</title>;
