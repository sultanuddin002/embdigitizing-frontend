import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const CapService = () => {
  return (
    <Layout>
      <AboutSection
        title="Cap/Hat Digitizing"
        textOne="Caps digitizing is carried out a bit differently because of the curved nature of the cap and to compensate for the seams to get that curved shape.
        It is done expertly, using the center out technique, starting from the bottom of the cap so that the finalized embroidered design renders itself like a normal machine digitized design."
        textTwo="Setting up designs for caps requires a few considerations, Cap digitizing refers to the process of converting simple caps into
        masterpiece artwork make sure that the design is of an appropriate size for the profile of the cap and ensure that the sewout path will not create ripples,
        thread breaks, needle breaks, or registration issues. A design that was digitized for a left chest application, may not be applicable for a finished cap application."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default CapService;

export const Head = () => <title>Cap Digitizing Service - EMBDigitized</title>;
