import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

function FAQDetails(props) {
  return (
    <Accordion sx={{ padding: "10px 0" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{props.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

const PaymentFaq = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ padding: "30px 0" }}
    >
      <Grid item sx={{ padding: "0 30px" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#000",
            textTransform: "uppercase",
            padding: "20px 0",
            fontWeight: "bold",
          }}
        >
          FAQs
        </Typography>
      </Grid>
      <Grid item>
        {/* Add Accordions here */}
        <FAQDetails
          title="Is there a free trial available?"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
        />
        <FAQDetails
          title="Can I change my plan later?"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
        />
        <FAQDetails
          title="What is your cancellation policy?"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
        />
        <FAQDetails
          title="Can other info added to the invoice?"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
        />
        <FAQDetails
          title="How does billing works?"
          details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          eget."
        />
      </Grid>
    </Grid>
  );
};

export default PaymentFaq;
