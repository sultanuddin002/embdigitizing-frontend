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

// icons
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px 0",
    },
  },
}));

function TestimonialsCardSection(props) {
  const classes = useStyles();
  return (
    <Card
      classes={{ root: classes.mainContainer }}
      sx={{
        backgroundColor: props.bgColor ? props.bgColor : "#fff",
      }}
    >
      <FormatQuoteSharpIcon
        sx={{
          color: props.bgColor ? "#fff" : theme.palette.primary.main,
          fontSize: "3rem",
        }}
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: props.bgColor ? "#fff" : "#000" }}
        >
          {props.content}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            paddingTop: "10px ",
            fontSize: "1.5rem",
            color: props.bgColor ? "#fff" : "#707070",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: props.bgColor ? "#fff" : "#707070",
            fontSize: "0.8rem",
          }}
        >
          {props.post}
        </Typography>
      </CardContent>
    </Card>
  );
}

const HomeTestimonials = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: "100%", padding: "80px 0" }}
    >
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "bold",
            paddingBottom: "50px",
          }}
        >
          testimonials
        </Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item sx={{ padding: "0px 20px" }}>
            <TestimonialsCardSection
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta libero ut velit vehicula,"
              name="Jane Doe"
              post="Cloths Seller"
            />
          </Grid>
          <Grid item sx={{ padding: "0px 20px" }}>
            <TestimonialsCardSection
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta libero ut velit vehicula,"
              name="Jane Doe"
              post="Cloths Seller"
              bgColor={theme.palette.secondary.main}
            />
          </Grid>
          <Grid item sx={{ padding: "0px 20px" }}>
            <TestimonialsCardSection
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta libero ut velit vehicula,"
              name="Jane Doe"
              post="Cloths Seller"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeTestimonials;
