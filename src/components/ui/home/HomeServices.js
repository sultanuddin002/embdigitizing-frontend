import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";

// images
import serviceOneImg from "../../../images/home-service-1.jpg";
import serviceTwoImg from "../../../images/home-service-2.jpg";

function CardServiceSection(props) {
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
            className="serviceButton"
            sx={{
              ...theme.typography.body1,
              color: "#fff",
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
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
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      rowSpacing={{ md: 2, sm: 2 }}
      sx={{ height: "100%", padding: "50px 0px", backgroundColor: "#fff" }}
    >
      <CardServiceSection
        image={serviceOneImg}
        title="Embroidery Digitizing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
        bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
        libero ut velit vehicula, in maximus."
        buttonTitle="Order Now"
      />

      <CardServiceSection
        image={serviceTwoImg}
        title="Get A Free Quote"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
        bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
        libero ut velit vehicula, in maximus."
        buttonTitle="Quote Now"
      />
    </Grid>
  );
};

export default HomeServices;
