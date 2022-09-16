import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

// icon
import pen from "../../../images/pen.svg";
import patch from "../../../images/patch.svg";
import pc from "../../../images/pc.svg";
import money from "../../../images/money.svg";
import quality from "../../../images/quality.svg";
import support from "../../../images/support.svg";

// image
import bannerImg from "../../../images/slider-1.jpg";
import aboutImage from "../../../images/about-image.jpg";

const useStyles = makeStyles((theme) => ({
  bannerSection: {
    backgroundImage: `url(${bannerImg})`,
    height: "300px",
    display: "block",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  innerGrid: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  iconImage: {
    filter:
      "invert(11%) sepia(81%) saturate(4693%) hue-rotate(334deg) brightness(83%) contrast(107%)",
    height: "30px",
    width: "30px",
  },
  imageContainer: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
  },
  mainContainer: {
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 30px",
    },
  },
  iconContainer: {
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 30px",
    },
  },
}));

function IconSection(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
      <Grid item>
        <img src={props.img} className={classes.iconImage} />
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.2rem",
            color: theme.palette.primary.main,
          }}
        >
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

function DetailColumn(props) {
  const classes = useStyles();
  return (
    <Grid item classes={{ root: classes.iconContainer }}>
      <Grid
        container="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        columnSpacing={{ md: 6, sm: 4 }}
        rowSpacing={{ md: 2, sm: 4 }}
      >
        <Grid item>
          <IconSection img={props.image} text={props.iconText} />
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {props.textOne}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {props.textTwo}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {props.textThree}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

const iconSection = (
  <>
    <Grid item>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        rowSpacing={{ md: 4, sm: 4 }}
        // columnSpacing={{ md: 12 }}
        sx={{ padding: "30px 0 0px 0" }}
      >
        <DetailColumn image={patch} iconText="Skilled and Experience" />
        <DetailColumn image={pen} iconText="Proficient Digitizer" />
        <DetailColumn image={pc} iconText="Unrestricted Revisions" />
      </Grid>
    </Grid>
    <Grid item>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        rowSpacing={{ md: 4, sm: 4 }}
        // columnSpacing={{ md: 12 }}
      >
        <DetailColumn image={money} iconText="100% Money-Back" />
        <DetailColumn image={quality} iconText="Quality Work" />
        <DetailColumn image={support} iconText="24/7 online Support" />
      </Grid>
    </Grid>
  </>
);

const AboutSection = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ paddingBottom: "30px" }}
    >
      {/* Banner image */}
      <Grid item classes={{ root: classes.bannerSection }}>
        <Container
          classes={{ root: classes.innerGrid }}
          maxWidth="xl"
        ></Container>
      </Grid>
      {/* Heading and sub heading */}
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            padding: "50px 0",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      {/* <Grid item>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            padding: "10px 0 50px 0",
            color: "#000",
            // width: "600px",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid> */}
      {/* First text section */}
      <Grid item>
        <Grid
          container
          direction="column"
          // columnSpacing={{ md: 5 }}
          rowSpacing={{ md: 3 }}
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">{props.textOne}</Typography>
          </Grid>
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">{props.textTwo}</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Single about image */}
      {/* <Grid item sx={{ padding: "30px 0", textAlign: "center" }}>
        <img src={aboutImage} className={classes.imageContainer} />
      </Grid> */}
      {/* icon section */}
      {props.showIcons ? iconSection : ""}
    </Grid>
  );
};

export default AboutSection;
