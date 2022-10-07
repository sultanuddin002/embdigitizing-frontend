import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import theme from "../theme";
import { Link } from "gatsby";
import { withStyles } from "@mui/styles";
// import required modules
import { Navigation, Autoplay } from "swiper";

// import images
import imageOne from "../../../images/slider-1.jpg";
import imageTwo from "../../../images/slider-2.webp";
import imageThree from "../../../images/slider-3.jpg";
import imageFour from "../../../images/slider-4.jpg";
import imageFive from "../../../images/slider-5.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../../../styles.css";

const commonSlideStyles = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "500px",
  display: "block",
  width: "100%",
};

const useStyles = makeStyles((theme) => ({
  slideOne: {
    backgroundImage: `url(${imageOne})`,
    ...commonSlideStyles,
  },
  slideTwo: {
    backgroundImage: `url(${imageTwo})`,
    ...commonSlideStyles,
  },
  slideThree: {
    backgroundImage: `url(${imageThree})`,
    ...commonSlideStyles,
  },
  slideFour: {
    backgroundImage: `url(${imageFour})`,
    ...commonSlideStyles,
  },
  slideFive: {
    backgroundImage: `url(${imageFive})`,
    ...commonSlideStyles,
  },
  innerGrid: {
    height: "100%",
    width: "100%",
    padding: "60px 0",
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
    height: "100%",
  },
  swiperSlide: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  descriptionContainer: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "900px",
    },
    fontSize: "25px",
    // fontFamily: "Poppins!important",
  },
  sliderHeading: {
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    // fontFamily: "Rubik!important",
  },
}));

function SliderContent(props) {
  const classes = useStyles();
  return (
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
          classes={{ root: classes.sliderHeading }}
          sx={{
            color: "#fff",
            textTransform: "normal",
            fontSize: "3rem",
            // width: "100px",
            textAlign: "center",
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            padding: "20px 0",
            textAlign: "center",
            // fontFamily: "Poppins!important",
          }}
        >
          {props.subTitle}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "center" }}
          classes={{ root: classes.descriptionContainer }}
        >
          {props.description}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          classes={{ root: classes.button }}
          component={Link}
          to="/contact"
          sx={{
            ...theme.typography.body1,
            color: theme.palette.primary.main,
            backgroundColor: "#fff",
            margin: "20px 0px",
            padding: "8px 20px",
            borderRadius: "20px",
          }}
        >
          {props.buttonText}
        </Button>
      </Grid>
    </Grid>
  );
}

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
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={classes.swiper}
    >
      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideFive }}>
          <SliderContent
            title="100% Off at First Order"
            subTitle="Sign up and get your first order free of cost"
            description="We are providing 100% off to our new customers on their first order. Contact us to find more detail"
            buttonText="Order Now"
          />
        </Paper>
      </SwiperSlide>

      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideOne }}>
          <SliderContent
            title="Welcome to EMBdigitized"
            subTitle="We are an embroidery digitizing service "
            description="Are you interested in a machine embroidery digitizing service with a super fast turnaround time and the best quality with smooth production on all types of fabrics?"
            buttonText="Order Now"
          />
        </Paper>
      </SwiperSlide>

      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideTwo }}>
          <SliderContent
            title="Custom Embroidery Digitizing Services"
            subTitle="Provide your logo and details. We will get it digitze for you"
            description="Do you have an image or logo that you want to convert into embroidery digitizing for cap, hat, left chest, jacket back, bags, towel, and patch.? Contact us and we’ll assist you in providing high-quality embroidery digitizing services."
            buttonText="Order Now"
          />
        </Paper>
      </SwiperSlide>

      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideThree }}>
          <SliderContent
            title="3D Puffs Digitizing Services"
            subTitle="We offer digitizing services for patches "
            description="Are you looking for eye-catching custom patch designs with amazing quality and completely custom design as per your provided details?"
            buttonText="Order Now"
          />
        </Paper>
      </SwiperSlide>

      <SwiperSlide className={classes.swiperSlide}>
        <Paper classes={{ root: classes.slideFour }}>
          <SliderContent
            title="Custom Patches Digitizing Services"
            subTitle="We offer digitizing services for patches "
            description="Are you looking for eye-catching custom patch designs with amazing quality and completely custom design as per your provided details?"
            buttonText="Order Now"
          />
        </Paper>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
