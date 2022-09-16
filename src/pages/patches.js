import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";

const PatchesService = () => {
  return (
    <Layout>
      <AboutSection
        title="Patches Digitizing Services"
        textOne="Patches designs are getting more complex and clients need them of excellent quality with numerous orders in a regular manner. So if you are looking for a long-term partner to produce high-quality patches digitizing service, we at EMDDigitized are the right pick for you."
        textTwo="Whether you require Patch digitizing services for Logo, design, 3D Puffs, Jacket backs, left chest, and front, or Hats/Caps, we will produce the patch digitizing in a detailed manner with outstanding customer satisfaction which will make you fulfilled from the final product."
        showIcons={false}
      />
    </Layout>
  );
};

export default PatchesService;

export const Head = () => <title>Patches Service - EMBDigitized</title>;
