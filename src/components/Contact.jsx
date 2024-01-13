import { useState, useRef, forwardRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import SocialButtons from "./Socials/SocialButtons";
import { useSocialData } from "../hooks/useSocialData";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
  const form = useRef();
  const socialData = useSocialData();
  const [open, setOpen] = useState(false);
  const [stat, setStat] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function sendEmail() {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return result;
  }

  function handleResult(result) {
    if (result.status === 200) {
      setAlertMessage("Email sent successfully.");
    } else {
      setAlertMessage("Email sent, but with status code: " + result.status);
    }
    setOpen(true);
    setStat("success");
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendEmail();
      handleResult(result);
    } catch (error) {
      setAlertMessage("Failed to send email. Error: " + error);
      setOpen(true);
      setStat("error");
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //         form.current,
  //         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result);
  //           console.log(result.status);
  //           setName("");
  //           setEmail("");
  //           setMessage("");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <>
      <Stack
        component="section"
        id="contact"
        alignItems="center"
        my={8}
        p={10}
        sx={{
          [theme.breakpoints.down("tablet")]: {
            mt: "3rem",
          },
        }}
      >
        <Typography
          variant="h4"
          mb={8}
          sx={{
            [theme.breakpoints.down("sm")]: {
              mb: "2rem",
            },
          }}
        >
          Contact Me
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          width="100%"
          justifyContent="space-between"
        >
          <Stack
            maxWidth="40%"
            sx={{
              [theme.breakpoints.down("md")]: {
                maxWidth: "100%",
                textAlign: "center",
              },
            }}
          >
            <Typography variant="h6" fontWeight={500} mb={1}>
              Let's Connect
            </Typography>
            <Typography>
              I'm currently looking for new opportunities and my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </Typography>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "left" }}
              mb={2}
            >
              {socialData.map((item, index) => (
                <SocialButtons
                  iconName={item.icon}
                  link={item.link}
                  key={index}
                  title={item.title}
                  placement="bottom"
                  size={60}
                  color="black"
                  fontSize="large"
                ></SocialButtons>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              maxWidth: 600,
              // mx: "auto",
              p: 2,
              border: "1px solid rgba(0,0,0, 0.2)",
              borderRadius: "1rem",
              boxShadow: 2,
            }}
          >
            <form onSubmit={handleSubmit} ref={form}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                name="from_name"
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "primary.main",
                  color: "#fff",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Stack>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <SnackbarAlert onClose={handleClose} severity={stat}>
            {alertMessage}
          </SnackbarAlert>
        </Snackbar>
      </Stack>
    </>
  );
}
