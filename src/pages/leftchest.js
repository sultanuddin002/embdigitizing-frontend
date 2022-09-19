import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const LeftChestService = () => {
  return (
    <Layout>
      <AboutSection
        title="Left Chest Digitizing"
        textOne="Left chest logo digitizing is by far the most popular and at the same time is fun and easy if you follow the proper approach. At EMBdigitized embroidery services are carried out by professional digitizers        with years of hands-on experience working on contemporary software and machines. We are offering the fastest turnaround time for all customer digitizing services. A design that was digitized for a left chest application, may not be applicable for a finished cap application."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default LeftChestService;

export const Head = () => (
  <title>Left Chest Digitizing Service - EMBDigitized</title>
);
