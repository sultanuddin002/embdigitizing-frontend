import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";

const About = () => {
  return (
    <Layout>
      <AboutSection
        title="about us"
        textOne="At EMBDigitizing, we have experienced and talented Embroidery digitizers with over 20 years of experience in creating quality designs in fast turnaround time. The knowledge about designing embroidery digitizing is considered as top-notch requirement as it yields quality as well as fully detailed artwork."
        textTwo="For services offered within EMBDigitized, we cover everything from embroidery digitizing for Cap/Hat, T-shirt, Front, and Left Chest, Sleeve, Jacket Back, 3D Puff, 3D Raised, Flat, Towel, small letters, Applique and Patch, etc. Above everything else, we ensure that customer satisfaction remains at the paramount importance around our services as we believe that happy customer is our true goal to achieve."
        showIcons={true}
      />
    </Layout>
  );
};

export default About;

export const Head = () => <title>About US - EMBDigitized</title>;
