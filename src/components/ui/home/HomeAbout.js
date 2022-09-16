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
      // width: "500px!important",
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
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
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
                title="Logo embroidery digitizing"
                description="Proficient in digitizing every type of logo for t-shirt, caps/hats, jacket back, front and left chest."
              />
              <AboutCardSection
                title="Unlimited Revisions"
                description="We’ll make sure that the final product exceeds your expectation in terms of quality, fine work, and best outcome."
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <AboutCardSection
                title="Support fabric types"
                description="We offer embroidery digitizing for every fabric and stitch type weather its cotton, linen, denim, canvas, wool, Burlap, and more."
              />
              <AboutCardSection
                title="Provide a scan of sew-out"
                description="If you want to check how well the design going to look on the actual stitch form, we can provide a scan of the sew-out design so that you can see quality first hand."
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
              At EMBDigitized, we have the means and techniques to produce
              high-quality embroidery digitizing service that is cost-effective
              and with a low turnaround time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ padding: "0 8px 18px 0px" }}
              classes={{ root: classes.descriptionSection }}
            >
              With over 20 years of experience, and working with various
              international brands, we can fulfill your requirement most
              professionally. Whether you are looking for a full-time partner to
              produce frequent embroidery digitizing services or just want a
              one-time service, we will make sure that you get an amazing
              experience while working with us.
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
