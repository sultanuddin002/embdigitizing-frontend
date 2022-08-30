import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";

// icon
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

const useStyles = makeStyles((theme) => ({
  contentSection: {
    [theme.breakpoints.down("md")]: {
      padding: "30px",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  descriptionSection: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  iconContainer: {
    [theme.breakpoints.down("md")]: {
      width: "500px!important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "340px!important",
      fontSize: "1rem",
    },
  },
  subTitleSection: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

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

function FeatureSection(props) {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        columnSpacing={{ sm: 4, md: 3 }}
        classes={{ root: classes.iconContainer }}
      >
        <Grid item>
          <DoubleArrowSharpIcon
            sx={{
              color: theme.palette.secondary.main,
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body1">{props.text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

const HomeAbout = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{ height: "100%", padding: "50px 0" }}
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
          classes={{ root: classes.contentSection }}
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
            <Typography
              variant="body1"
              sx={{ padding: "8px 0" }}
              classes={{ root: classes.subTitleSection }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ padding: "0 8px 18px 0px" }}
              classes={{ root: classes.descriptionSection }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus magna blandit. Proin molestie
              facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
              rhoncus risus sed dictum pulvinar.
            </Typography>
          </Grid>
          <FeatureSection text="Top-class Quality In Competitive Pricing" />
          <FeatureSection text="Fast Turnaround Time Of 12 Hours" />
          <FeatureSection text="Urgent Delivery Within 8 Hours Without Fee" />
          <FeatureSection text="Standard Payment Mode Is Paypal" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
