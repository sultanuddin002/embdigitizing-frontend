import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import theme from "../theme";

const IconSection = (props) => {
  return (
    <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
      <Grid item>{props.children}</Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IconSection;
