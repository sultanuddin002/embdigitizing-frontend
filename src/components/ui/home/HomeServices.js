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

const HomeServices = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "700px", backgroundColor: "#fff" }}
    >
      <Grid item sx={{ padding: "0px 40px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image={serviceOneImg}
            alt="services image"
          />
          <CardContent>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontWeight: 600 }}
            >
              Embroidery Digitizing
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", padding: "10px 0" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus.
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
              Order Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sx={{ padding: "0px 40px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image={serviceTwoImg}
            alt="services image"
          />
          <CardContent>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontWeight: 600 }}
            >
              Get A Free Quote
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", padding: "10px 0" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
              bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
              libero ut velit vehicula, in maximus.
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
              Quote Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeServices;
