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
      width: "400px",
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
    <Grid item classes={{ root: classes.mainContainer }}>
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

const AboutSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
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
          about us
        </Typography>
      </Grid>
      <Grid item>
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
      </Grid>

      {/* First text section */}
      <Grid item>
        <Grid
          container
          columnSpacing={{ md: 5 }}
          rowSpacing={{ md: 3 }}
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus magna blandit. Proin molestie
              facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
              rhoncus risus sed dictum pulvinar.
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus magna blandit. Proin molestie
              facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas
              rhoncus risus sed dictum pulvinar.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Single about image */}
      <Grid item sx={{ padding: "30px 0", textAlign: "center" }}>
        <img src={aboutImage} className={classes.imageContainer} />
      </Grid>

      {/* icon section */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={{ md: 4, sm: 4 }}
          // columnSpacing={{ md: 12 }}
          sx={{ padding: "10px 0 30px 0" }}
        >
          <DetailColumn
            image={patch}
            iconText="Embroidery Digitizers"
            textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
          />
          <DetailColumn
            image={pen}
            iconText="experienced designers"
            textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
          />
          <DetailColumn
            image={pc}
            iconText="Technology specialist"
            textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
            textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl
          vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac
          euismod. Cras porta libero ut velit vehicula, in maximus magna
          blandit. Proin molestie facilisis eros, a pellentesque ipsum
          pulvinar nec. Maecenas rhoncus risus sed dictum pulvinar."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
