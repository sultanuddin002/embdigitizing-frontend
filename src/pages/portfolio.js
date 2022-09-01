import Typography from "@mui/material/Typography";
import * as React from "react";
import Layout from "../components/ui/layout";
import PortfolioContent from "../components/ui/portfolio/PortfolioContent";

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioContent />
    </Layout>
  );
};

export default Portfolio;

export const Head = () => <title>Portfolio - EMBDigitized</title>;
