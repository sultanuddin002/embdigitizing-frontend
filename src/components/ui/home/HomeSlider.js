import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import theme from "../theme";
import { withStyles } from "@mui/styles";
// import required modules
import { Navigation, Autoplay } from "swiper";

// import images
import imageOne from "../../../images/slider-1.jpg";
import imageTwo from "../../../images/slider-2.webp";
import imageThree from "../../../images/slider-3.jpg";
import imageFour from "../../../images/slider-4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../../../styles.css";

const useStyles = makeStyles((theme) => ({
  slideOne: {
    backgroundImage: `url(${imageOne})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "500px",
    display: "block",
    width: "100%",
  },
  slideTwo: {
    backgroundImage: `url(${imageTwo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "500px",
    display: "block",
    width: "100%",
  },
  slideThree: {
    backgroundImage: `url(${imageThree})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "500px",
    display: "block",
    width: "100%",
  },
  slideFour: {
    backgroundImage: `url(${imageFour})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "500px",
    display: "block",
    width: "100%",
  },
  innerGrid: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    "&:hover": {
      backgroundColor: "#A1012D!important",
      color: "#fff",
      background: theme.palette.primary.main,
    },
  },
  swiper: {
    width: "100%",
    height: "500px",
  },
  swiperSlide: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}));

const HomeSlider = () => {
  const classes = useStyles();
  return (
    <Swiper
      navigation
      loop
      spaceBetween={50}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={classes.swiper}
    >
      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideOne }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            classes={{ root: classes.innerGrid }}
          >
            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "3rem",
                  width: "100px",
                  textAlign: "center",
                  width: "300px",
                }}
              >
                Welcome To embdigitized
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  padding: "20px 0",
                }}
              >
                We digitized your artwork!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Do you need machine embriodery digitizing service with super
                fast turnaround & excellent quality?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: classes.button }}
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.primary.main,
                  backgroundColor: "#fff",
                  margin: "20px 0px",
                  padding: "8px 20px",
                  borderRadius: "20px",
                }}
              >
                Get Free Quote Now!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideTwo }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            classes={{ root: classes.innerGrid }}
          >
            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "3rem",
                  width: "100px",
                  textAlign: "center",
                  width: "300px",
                }}
              >
                Welcome To embdigitized
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  padding: "20px 0",
                }}
              >
                We digitized your artwork!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Do you need machine embriodery digitizing service with super
                fast turnaround & excellent quality?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: classes.button }}
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.primary.main,
                  backgroundColor: "#fff",
                  margin: "20px 0px",
                  padding: "8px 20px",
                  borderRadius: "20px",
                }}
              >
                Get Free Quote Now!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideThree }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            classes={{ root: classes.innerGrid }}
          >
            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "3rem",
                  width: "100px",
                  textAlign: "center",
                  width: "300px",
                }}
              >
                Welcome To embdigitized
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  padding: "20px 0",
                }}
              >
                We digitized your artwork!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Do you need machine embriodery digitizing service with super
                fast turnaround & excellent quality?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: classes.button }}
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.primary.main,
                  backgroundColor: "#fff",
                  margin: "20px 0px",
                  padding: "8px 20px",
                  borderRadius: "20px",
                }}
              >
                Get Free Quote Now!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </SwiperSlide>
      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideFour }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            classes={{ root: classes.innerGrid }}
          >
            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "3rem",
                  width: "100px",
                  textAlign: "center",
                  width: "300px",
                }}
              >
                Welcome To embdigitized
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  padding: "20px 0",
                }}
              >
                We digitized your artwork!
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Do you need machine embriodery digitizing service with super
                fast turnaround & excellent quality?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                classes={{ root: classes.button }}
                sx={{
                  ...theme.typography.body1,
                  color: theme.palette.primary.main,
                  backgroundColor: "#fff",
                  margin: "20px 0px",
                  padding: "8px 20px",
                  borderRadius: "20px",
                }}
              >
                Get Free Quote Now!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
