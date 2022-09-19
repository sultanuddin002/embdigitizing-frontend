import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const PuffServices = () => {
  return (
    <Layout>
      <AboutSection
        title="3D Puff Digitizing Services"
        textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
        bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
        libero ut velit vehicula, in maximus magna blandit. Proin molestie
        facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
        rhoncus risus sed dictum pulvinar."
        textTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
        bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
        libero ut velit vehicula, in maximus magna blandit. Proin molestie
        facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
        rhoncus risus sed dictum pulvinar."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default PuffServices;

export const Head = () => <title>3D Puff Services - EMBDigitized</title>;
