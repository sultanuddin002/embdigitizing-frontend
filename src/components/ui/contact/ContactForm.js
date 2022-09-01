import React, { setState, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import theme from "../theme";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

const SERVICE_ID = "service_aekkc0e";
const TEMPLATE_ID = "template_od71c8j";
const USER_ID = "2wlb5kSsSCxex4f4r";

const useStyles = makeStyles((theme) => ({
  inputSection: {
    [theme.breakpoints.up("md")]: {
      width: "49%",

      "& > .MuiInputBase-root": {
        width: "100%",
        display: "inline",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "5px 0!important",
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "#0D2456!important",
      color: "#fff",
    },
  },
  formContainer: {
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  //   const [contactDetails, setContactDetails] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //     sent: false,
  //     buttonText: "Send Message",
  //     emailError: false,
  //   });

  //   console.log("name: " + contactDetails.name);
  //   console.log("email: " + contactDetails.email);
  //   console.log("subject: " + contactDetails.subject);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(e.target);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const handleFormReset = () => {};

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: "70px 0" }}
    >
      <Grid item>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: "15px 0",
          }}
        >
          contact us
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">feel free to contact us anytime</Typography>
      </Grid>
      <Grid
        item
        sx={{
          padding: "20px 0",
          padding: "0 20px",
        }}
        classes={{ root: classes.formContainer }}
      >
        {/* Add your contact form here */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleOnSubmit}
          onReset={handleFormReset}
          sx={{ "&> .MuiTextField-root": {} }}
        >
          <TextField
            classes={{ root: classes.inputSection }}
            id="outline-basic"
            placeholder="Full Name"
            // label="Full Name"
            variant="outlined"
            name="name"
            // value={contactDetails.name}
            // onChange={(e) =>
            //   setContactDetails({ ...contactDetails, name: e.target.value })
            // }
            required
            // fullWidth
            type="text"
          />
          <TextField
            classes={{ root: classes.inputSection }}
            sx={{ paddingLeft: "10px" }}
            id="outline-basic"
            placeholder="Email"
            // label="Email"
            variant="outlined"
            name="email"
            // value={contactDetails.email}
            // onChange={(e) =>
            //   setContactDetails({ ...contactDetails, email: e.target.value })
            // }
            required
            // fullWidth
            type="text"
          />
          <TextField
            sx={{ padding: "5px 0" }}
            id="outline-basic"
            placeholder="Subject"
            name="subject"
            // label="Subject"
            variant="outlined"
            // value={contactDetails.subject}
            // onChange={(e) =>
            //   setContactDetails({ ...contactDetails, subject: e.target.value })
            // }
            required
            fullWidth
            type="text"
          />
          <TextField
            sx={{ padding: "5px 0" }}
            id="outlined-multiline-static"
            multiline
            placeholder="Message"
            name="message"
            variant="outlined"
            rows={4}
            // value={contactDetails.message}
            // onChange={(e) =>
            //   setContactDetails({ ...contactDetails, message: e.target.value })
            // }
            required
            type="text"
            fullWidth
          />
          <Button
            classes={{ root: classes.button }}
            sx={{
              ...theme.typography.body1,
              color: "#fff",
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
              borderRadius: "20px",
              margin: "15px 0",
            }}
            component="button"
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
