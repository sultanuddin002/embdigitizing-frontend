import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import Carousel, { Modal, ModalGateway } from "react-images";
import Lightroom from "react-lightbox-gallery";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import { photos } from "./photos";

const HomeGalleryNew = (props) => {
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

  var images = [
    {
      src: "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      desc: "Person wearing shoes",
      sub: "Gift Habeshaw",
    },
    {
      src: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      desc: "Blonde woman wearing sunglasses smiling at the camera ",
      sub: "Dmitriy Frantsev",
    },
  ];

  var settings = {
    columnCount: {
      default: 3,
      mobile: 1,
      tab: 4,
    },
    mode: "dark",
  };

  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "contain",
    width: "100%",
    height: "100%",
  };

  return (
    <Grid
      direction="column"
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: props.bgColor,
        padding: props.padding,
        height: "100%",
      }}
    >
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: "bold",
            padding: "40px 0",
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Gallery>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 0fr)",
              gridGap: 10,
            }}
          >
            {photos.map((photo) => (
              <Item
                cropped
                original={photo.src}
                thumbnail={photo.src}
                width="3000"
                height="2879"
              >
                {({ ref, open }) => (
                  <img
                    style={smallItemStyles}
                    src={photo.src}
                    ref={ref}
                    onClick={open}
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </Grid>
    </Grid>
  );
};

export default HomeGalleryNew;
