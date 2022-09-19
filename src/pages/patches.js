import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImgPatches from "../images/patch-bg.jpg";

const PatchesService = () => {
  return (
    <Layout>
      <AboutSection
        title="Custom Embroidery Patches"
        textOne="Patches designs are getting more complex and clients need them of excellent quality with numerous orders in a regular manner. So if you are looking for a long-term partner to produce high-quality patches digitizing service, we at EMBdigitized are the right pick for you."
        textTwo="When you work with our artist they will create a digital proof from your ideas or design that will embroider correctly. Text that is too small or details that are too complex will not sew properly. We’ll help you make sure your patches look the best they can. "
        textThree="We’re your one-stop, no-problem source if you need custom patches. We supply top quality patches at great prices, with unbeatable customer service."
        backgroundImg={bannerImgPatches}
        showIcons={false}
      />
    </Layout>
  );
};

export default PatchesService;

export const Head = () => <title>Patches Service - EMBDigitized</title>;
