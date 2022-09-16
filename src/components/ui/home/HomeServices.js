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

// images
import serviceOneImg from "../../../images/home-service-1.jpg";
import serviceTwoImg from "../../../images/home-service-2.jpg";
import serviceThreeImg from "../../../images/client-4.JPG";
import serviceFourImg from "../../../images/client-1.jpg";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "#0D2456!important",
      color: "#fff",
    },
  },
}));

function CardServiceSection(props) {
  const classes = useStyles();
  return (
    <Grid item sx={{ padding: "20px 40px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt="services image"
        />
        <CardContent>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", padding: "10px 0" }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", padding: "20px 0" }}>
          <Button
            // className="serviceButton"
            classes={{ root: classes.button }}
            sx={{
              ...theme.typography.body1,
              color: "#fff",
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            {props.buttonTitle}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const HomeServices = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      rowSpacing={{ md: 2, sm: 2 }}
      sx={{ height: "100%", padding: "50px 0px", backgroundColor: "#fff" }}
    >
      <CardServiceSection
        image={serviceThreeImg}
        title="Embroidery Digitizing"
        description="Are you looking for embroidery digitizing services with someone who has more than 20 years of experience in working with all types of stitch types? Simply contact EMBDigitizing where you will get the best quality guarantee."
        buttonTitle="Learn More"
      />

      <CardServiceSection
        image={serviceFourImg}
        title="Patches Digitizing"
        description="The use of Patches for T-shirts, left pocket, bags, and caps are getting in demand every passing day. If you are looking for quality and fast turn-around time for your patches digitizing solution, contact us and we’ll provide our amazing embroidery digitizing services for amazing patches designing. "
        buttonTitle="Learn More"
      />

      <CardServiceSection
        image={serviceTwoImg}
        title="Get A Free Quote"
        description="Do you have a design with you and want to convert it into an embroidery digitizing format for your required fabric type? Simply contact us and provide the details about your work. We will offer you a comprehensive quote including cost, turnaround time, and every query that you have regarding the work."
        buttonTitle="Quote Now"
      />
    </Grid>
  );
};

export default HomeServices;
