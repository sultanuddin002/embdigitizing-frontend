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
      width: "300px!important",
    },
    [theme.breakpoints.down("sm")]: {
      // width: "340px!important",
      fontSize: "1rem",
      flexWrap: "nowrap!important",
    },
  },
  subTitleSection: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  iconInner: {
    [theme.breakpoints.down("md")]: {
      width: "3rem",
    },
  },
}));

function AboutCardSection(props) {
  return (
    <Grid item sx={{ padding: "20px 20px" }}>
      <Card
        sx={{
          maxWidth: 250,
          height: "320px",
          boxShadow: `0px 0px 3px 4px ${props.shades}`,
          borderRadius: "50px 0 50px 0",
        }}
      >
        <CardContent>
          <Typography
            variant="h2"
            sx={{
              color: "#000",
              fontWeight: "700",
            }}
          >
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ padding: "10px 0" }}>
            {props.description}
          </Typography>
        </CardContent>
        {/* <CardActions sx={{ padding: " 9px" }}>
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
        </CardActions> */}
      </Card>
    </Grid>
  );
}

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
        <Grid item classes={{ root: classes.iconInner }}>
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
              <AboutCardSection
                title="Embroidery Digitizing"
                description="Digitizing is just like any other digitizing process, it converts the image of a logo into a specific command which the embroidery machine can read and interpret in a specific streamlined and automated fashion. "
                shades="rgba(163,0,47,1)"
              />
              <AboutCardSection
                title="Quality is our Priority"
                description="We always give preference to quality with the super fast turnaround time and we make sure that we fulfil all the requirements that were demanded by the customer at the time of order."
                shades="rgba(127,127,127,1)"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <AboutCardSection
                title="Affordable Pricing"
                description="We are providing the best digitizing services at the most affordable pricing that you will not get from anywhere else."
                shades="rgba(127,127,127,1)"
              />
              <AboutCardSection
                title="Fabric Supportive Digitizing"
                description="We do embroidery digitizing according to your required fabric whether it's Pique, Polyester, Twill, Cotton, Denim, Towel, Canvas, Linen, Wool, and more."
                shades="rgba(12,38,87,1)"
              />
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
              At EMBdigitized, we have the means and techniques to produce
              high-quality embroidery digitizing services that are
              cost-effective and with a fastest turnaround time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ padding: "0 8px 18px 0px" }}
              classes={{ root: classes.descriptionSection }}
            >
              With over 22 years of experience, and working with various
              international brands, embroidery companies we can fulfill your
              requirements most professionally. If you are looking for a
              full-time partner to get frequent embroidery digitizing services
              then you have come to the right place. We will make sure that you
              get an amazing experience and quality while working with us.
            </Typography>
          </Grid>
          <FeatureSection text="Fastest Delivery Time" />
          <FeatureSection text="24/7 Availability" />
          <FeatureSection text="Money Back Guarantee" />
          <FeatureSection text="Highly Skilled Digitizers" />
          <FeatureSection text="Competitive Pricing" />
          <FeatureSection text="Free Format Conversion" />
          <FeatureSection text="Free Editing" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
