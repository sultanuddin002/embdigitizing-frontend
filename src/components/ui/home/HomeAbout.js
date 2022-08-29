import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";

// icon
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

const aboutCardSection = (
  <Grid item sx={{ padding: "20px 20px" }}>
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          Logo Embroidery Digitizing
        </Typography>
        <Typography variant="body2" sx={{ padding: "10px 0" }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean At
          Auctor Ligula.
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: " 9px" }}>
        <Button
          className="aboutButton"
          sx={{
            ...theme.typography.body2,
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
          }}
        >
          Read More
          <ArrowRightAltIcon />
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

const HomeAbout = () => {
  return (
    <Grid
      container
      sx={{ height: "700px" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={7}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              {aboutCardSection}
              {aboutCardSection}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              {aboutCardSection}
              {aboutCardSection}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Why EMBDigitized?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ padding: "8px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ padding: "0 8px 18px 0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus magna blandit. Proin molestie
              facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
              rhoncus risus sed dictum pulvinar.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <DoubleArrowSharpIcon
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Top-class Quality In Competitive Pricing
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <DoubleArrowSharpIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Fast Turnaround Time Of 12 Hours
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <DoubleArrowSharpIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Urgent Delivery Within 8 Hours Without Fee
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <DoubleArrowSharpIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Standard Payment Mode Is Paypal
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
