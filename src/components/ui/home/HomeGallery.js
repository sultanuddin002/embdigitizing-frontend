import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const HomeGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Grid
      direction="column"
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "10% 10%",
        height: "100%",
      }}
    >
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: "bold",
            padding: "40px 0",
          }}
        >
          our portfolio
        </Typography>
      </Grid>
      <Grid item>
        <Gallery
          className="homeGallery"
          photos={photos}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Grid>
    </Grid>
  );
};

export default HomeGallery;
