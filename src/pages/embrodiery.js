import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import EmbroiderySection from "../components/ui/embrodiery/EmbroiderySection";
import Layout from "../components/ui/layout";

const EmbrodieryService = () => {
  return (
    <Layout>
      <EmbroiderySection />
    </Layout>
  );
};

export default EmbrodieryService;

export const Head = () => <title>Embrodiery Service - EMBDigitized</title>;
