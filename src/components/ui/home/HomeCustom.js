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
  },
  iconRoot: {
    textAlign: "center",
  },
  redColor: {
    color: theme.palette.primary.main,
  },
}));

function CustomCardSection(props) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="200"
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
          className="serviceButton"
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
      sx={{ height: "700px", backgroundColor: "#fff" }}
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
        <Grid container>
          <Grid item sx={{ padding: "20px" }}>
            <CustomCardSection img={bag} title="Hat" />
          </Grid>
          <Grid item sx={{ padding: "20px" }}>
            <CustomCardSection img={cap} title="Cap" />
          </Grid>
          <Grid item sx={{ padding: "20px" }}>
            <CustomCardSection img={jacket} title="Jackets" />
          </Grid>
          <Grid item sx={{ padding: "20px" }}>
            <CustomCardSection img={tshirt} title="T-Shirt" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeCustom;