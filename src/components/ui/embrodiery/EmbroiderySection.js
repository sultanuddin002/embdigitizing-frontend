import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

// image
import bannerImg from "../../../images/embroidery-banner-2.jpg";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  bannerSection: {
    height: "300px",
    display: "block",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  innerGrid: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  iconImage: {
    filter:
      "invert(11%) sepia(81%) saturate(4693%) hue-rotate(334deg) brightness(83%) contrast(107%)",
    height: "30px",
    width: "30px",
  },
  imageContainer: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
  },
  mainContainer: {
    [theme.breakpoints.up("md")]: {
      // width: "800px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      // padding: "10px 30px",
    },
  },
  iconContainer: {
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 30px",
    },
  },
}));

function ContentSection(props) {
  const classes = useStyles();
  return (
    <Box>
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            padding: "30px 0",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          rowSpacing={{ md: 3 }}
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">{props.textOne}</Typography>
          </Grid>
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">{props.textTwo}</Typography>
          </Grid>
          <Grid item classes={{ root: classes.mainContainer }}>
            <Typography variant="body2">{props.textThree}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const EmbroiderySection = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ paddingBottom: "30px" }}
    >
      {/* Banner image */}
      <Grid
        item
        classes={{ root: classes.bannerSection }}
        sx={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <Container
          classes={{ root: classes.innerGrid }}
          maxWidth="xl"
        ></Container>
      </Grid>
      {/* Heading and sub heading */}
      <Container>
        <ContentSection
          title="Embroidery Digitizing Services"
          textOne="Back in the old days, embroidery used to be done by hand. After the
        advancements in technology and rapid industrialization, embroidery
        can be done with the help of computerized machines. As for designers
        who are responsible for providing instructions to machines to design
        beautiful and clean embroidery, it’s the job of embroidery
        digitizers."
          textTwo="Embroidery digitizing services create an embroidery pattern or design that is comparatively less expensive as it is created in a short duration of time. You can quickly send us your logo or any other custom design or pattern, picture, photo etc to enjoy our Custom Embroidery Digitizing."
        />
        {/* Heading and sub heading */}
        <ContentSection
          title="Cap/Hat Digitizing"
          textOne="Caps digitizing is carried out a bit differently because of the curved nature of the cap and to compensate for the seams to get that curved shape.
          It is done expertly, using the center out technique, starting from the bottom of the cap so that the finalized embroidered design renders itself like a normal machine digitized design."
          textTwo="Setting up designs for caps requires a few considerations, Cap digitizing refers to the process of converting simple caps into
          masterpiece artwork make sure that the design is of an appropriate size for the profile of the cap and ensure that the sewout path will not create ripples,
          thread breaks, needle breaks, or registration issues. A design that was digitized for a left chest application, may not be applicable for a finished cap application."
        />
        <ContentSection
          title="3D Puff Digitizing"
          textOne="At EMBdigitized we are offering high quality 3D Puff digitizing services for all Lettering designs and artworks of your companies. Our technically sound and highly skilled digitizers can turn any and all of your designs into highly effective Puff Embroidery digitized designs, all according to the specifications provided to us by the customer when submitting the design. Customers can further identify which specific areas they would like to have the puff under to make it the standout point of the overall design and the finalized embroidery design will be delivered to the customer in the format, readily executable by their specific embroidery machines. If you’d like to compare costs or for high quality with extremely economically priced, register at our website right now and get the first 3D puff logo at free of cost."
        />
        <ContentSection
          title="Left Chest Digitizing"
          textOne="Left chest logo digitizing is by far the most popular and at the same time is fun and easy if you follow the proper approach. At EMBdigitized embroidery services are carried out by professional digitizers
          with years of hands-on experience working on contemporary software and machines. We are offering the fastest turnaround time for all customer digitizing services. A design that was digitized for a left chest
          application, may not be applicable for a finished cap application."
        />
        <ContentSection
          title="Jacket Back Digitizing"
          textOne="EMBdigitized is a pioneer in custom digitizing services, especially for Jacket Backs that give a stylish look of your jacket design by using our jacket back embroidery digitizing service at a reasonable price. Our highly trained and experienced staff will take
          your design from concept to garment using the very best the software the industry has to offer.A highly mastered and experienced digitizer is required to make sure each and every stitch is made properly. "
          textTwo="This Digitizing Service is popular among the Embroidery Digitizing Services as it requires expertise that is able to handle all the requirements of clients.
          The process can be finished quickly and your designs can be made in the shortest span of time because we have got a strong backhand team to handle all the work."
        />
        <ContentSection
          title="Towel Digitizing"
          textOne="Towel digitizing isn’t vastly different from different types of machine weaving or does it require particular weaving machines able for executing such weaving. Everything comes down to how configuration is extraordinarily digitized for the towel texture that makes it reasonable to be weaved into it, by picking the most proper underlay and besides, by remunerating utilizing push and draw for this particular precarious texture. Our highly skilled and expertly trained digitizers can turn any and all of your designs into highly effective customized towel embroidery digitized designs, all according to the specifications provided to us by the customer when submitting the design. As said, specialized forms of embroidery like puff can be utilized to give embroidery on your towels much more definition and classiness than just a simple branding method consisting of flat stitched embroidery. "
        />
        <ContentSection
          title="Applique Digitizing"
          textOne="Our first step is to assess the artwork for large coverage areas that can be replaced with multiple appliques as opposed to using fill stitches. The major things to consider when digitizing is that you don’t need as much underlay for these large designs within your fill and column stitches, if you digitize these logos with the same values as you do left chest designs you’ll find that you can add thousands of unnecessary stitches. You can also slightly decrease your densities within your stitch types as well, because these designs are so
          large and the applique fabric is very stable you’ll find that using too much density will actually work against you by promoting movement."
          textTwo="With corporate logos EMBdigitized looking to outline fill areas with column stitches to promote clean edges, this can also at times be overlooked to help keep the stitches down. Probably the most cost-effective way is to use the tackle twill or zig-zag stitch method whenever possible. We provide you with applique digitizing services with the finest quality and fastest turnaround time. "
        />
      </Container>
    </Grid>
  );
};

export default EmbroiderySection;
