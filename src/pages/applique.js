import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const AppliqueService = () => {
  return (
    <Layout>
      <AboutSection
        title="Applique Digitizing"
        textOne="Our first step is to assess the artwork for large coverage areas that can be replaced with multiple appliques as opposed to using fill stitches. The major things to consider when digitizing is that you don’t need as much underlay for these large designs within your fill and column stitches, if you digitize these logos with the same values as you do left chest designs you’ll find that you can add thousands of unnecessary stitches. You can also slightly decrease your densities within your stitch types as well, because these designs are so large and the applique fabric is very stable you’ll find that using too much density will actually work against you by promoting movement. "
        textTwo="With corporate logos EMBdigitized looking to outline fill areas with column stitches to promote clean edges, this can also at times be overlooked to help keep the stitches down. Probably the most cost-effective way is to use the tackle twill or zig-zag stitch method whenever possible. We provide you with applique digitizing services with the finest quality and fastest turnaround time."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default AppliqueService;

export const Head = () => (
  <title>Applique Digitizing Service - EMBDigitized</title>
);
