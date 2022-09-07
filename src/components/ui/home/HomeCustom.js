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
import bag from "../../../images/school-bag.svg";
import cap from "../../../images/cap.svg";
import jacket from "../../../images/jacket.svg";
import tshirt from "../../../images/tshirt.svg";

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    // height: "50px",
    // width: "32px",
    // color: theme.palette.secondary.main,
    filter:
      "invert(11%) sepia(53%) saturate(2473%) hue-rotate(207deg) brightness(94%) contrast(100%)",
    [theme.breakpoints.up("md")]: {
      height: "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  iconRoot: {
    textAlign: "center",
  },
  redColor: {
    color: theme.palette.primary.main,
  },
  button: {
    "&:hover": {
      backgroundColor: "#0D2456!important",
      color: "#fff",
    },
  },
}));

function CustomCardSection(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        component="img"
        // height="200"
        image={props.img}
        alt="services image"
        classes={{ root: classes.imageIcon }}
      />
      <CardContent>
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: 600 }}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", padding: "20px 0" }}>
        <Button
          classes={{ root: classes.button }}
          // className="serviceButton"
          sx={{
            ...theme.typography.body1,
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          Order Now
        </Button>
      </CardActions>
    </Card>
  );
}

const HomeCustom = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", backgroundColor: "#fff", padding: "70px 0" }}
    >
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            color: "#000",
            paddingBottom: "50px",
          }}
        >
          need custom <span className={classes.redColor}>digitizing?</span>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sx={{ padding: "20px" }} md={3} sm={6} xs={6}>
            <CustomCardSection img={bag} title="Hat" />
          </Grid>
          <Grid item sx={{ padding: "20px" }} md={3} sm={6} xs={6}>
            <CustomCardSection img={cap} title="Cap" />
          </Grid>
          <Grid item sx={{ padding: "20px" }} md={3} sm={6} xs={6}>
            <CustomCardSection img={jacket} title="Jackets" />
          </Grid>
          <Grid item sx={{ padding: "20px" }} md={3} sm={6} xs={6}>
            <CustomCardSection img={tshirt} title="T-Shirt" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeCustom;
