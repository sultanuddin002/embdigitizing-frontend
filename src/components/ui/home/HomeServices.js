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
import serviceThreeImg from "../../../images/client-4.jpg";
import serviceFourImg from "../../../images/client-1.jpg";
import serviceClientOneImg from "../../../images/home-patches-2.jpg";
import serviceClientTwoImg from "../../../images/get-quote.jpg";
import { Link } from "gatsby";

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
      <Card
        sx={{
          maxWidth: 345,
          height: "660px",
          boxShadow: `0px 0px 3px 4px ${props.shades}`,
          borderRadius: "50px 0 50px 0",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt="services image"
        />
        <CardContent sx={{ height: 250 }}>
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
            component={Link}
            to={props.link}
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
        description="Are you looking for embroidery digitizing services with someone who has more than 22 years of experience of embroidery digitizing simply contact EMBdigitized where you will get the best quality with fastest turnaround time in the market."
        buttonTitle="Order Now"
        link="/contact"
        shades="rgba(163,0,47,1)"
      />

      <CardServiceSection
        image={serviceClientOneImg}
        title="Custom Embroidery Patches"
        description="At EMBdigitized Custom Embroidery Patches we make it easy to create, order, and have your custom patches in no time at all. Our passion is bringing the benefits of on-demand manufacturing to everyone that is why we offer rapid turnaround times, fair pricing, and low minimum quantity orders for every custom patch project you create with us. "
        buttonTitle="Order Now"
        link="/contact"
        shades="rgba(127,127,127,1)"
      />
      <CardServiceSection
        image={serviceClientTwoImg}
        title="Get A Free Quote"
        description="Do you have a design with you and want to convert it into an embroidery digitizing format for your required fabric type? Simply contact us and provide the details about your work. We will offer you a comprehensive quote including cost and every query that you have regarding the work."
        buttonTitle="Quote Now"
        link="/contact"
        shades="rgba(12,38,87,1)"
      />
    </Grid>
  );
};

export default HomeServices;
