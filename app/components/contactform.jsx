"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    // Reset errors
    setNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validate form
    let hasError = false;

    if (!name) {
      setNameError("Please enter your name.");
      hasError = true;
    }

    if (!email) {
      setEmailError("Please enter your email address.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (!subject) {
      setSubjectError("Please enter a subject.");
      hasError = true;
    }

    if (!message) {
      setMessageError("Please enter a message.");
      hasError = true;
    }

    if (hasError) return;

    // Submit form
    setIsSubmitting(true);
    try {
      const response = await fetch("./api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Success case
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextField
          fullWidth
          margin="normal"
          size="small"
          placeholder="Name"
          value={name}
          minRows={2}
          maxRows={2}
          onChange={(e) => setName(e.target.value)}
          error={!!nameError}
          helperText={nameError}
          label=""
          InputLabelProps={{ shrink: false }}
          sx={(theme) => ({
            flex: 1,
            marginRight: "1rem",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
                borderWidth: "1.5px",
              },
              "&:hover fieldset": {
                borderColor: "gray",
                borderWidth: "2px",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.mode === "dark" ? "white" : "black",
                borderWidth: "2px",
              },
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "Arial", // or any custom font
                fontSize: "1rem",
              },
            },
          })}
        />

        <TextField
          fullWidth
          size="small"
          margin="normal"
          label=""
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          InputLabelProps={{ shrink: false }}
          sx={(theme) => ({
            flex: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
                borderWidth: "1.5px",
              },
              "&:hover fieldset": {
                borderColor: "gray",
                borderWidth: "2px",
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.mode === "dark" ? "white" : "black",
                borderWidth: "2px",
              },
            },
          })}
        />
      </div>

      <TextField
        fullWidth
        margin="dense"
        label=""
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        error={!!subjectError}
        helperText={subjectError}
        InputLabelProps={{ shrink: false }}
        sx={(theme) => ({
          flex: 1,
          marginRight: "1rem",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
              borderWidth: "1.5px",
            },
            "&:hover fieldset": {
              borderColor: "gray",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.mode === "dark" ? "white" : "black",
              borderWidth: "2px",
            },
          },
        })}
      />

      <TextField
        fullWidth
        margin="dense"
        label=""
        placeholder="Message"
        multiline
        minRows={3}
        maxRows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={!!messageError}
        helperText={messageError}
        InputLabelProps={{ shrink: false }}
        sx={(theme) => ({
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
              borderWidth: "1.5px",
            },
            "&:hover fieldset": {
              borderColor: "gray",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.mode === "dark" ? "white" : "black",
              borderWidth: "2px",
            },
          },
          "& textarea": {
            resize: "vertical",
            maxHeight: "100px",
          },
        })}
      />

      <Button
        variant="contained"
        className="contact-button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        sx={{
          mt: "0.6rem",
          backgroundColor: "#686e6a", 
          color: "#fefefe",
          borderRadius: "999px", 
          paddingX: "1rem",
          paddingY: "rem",
          fontWeight: 500,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#333333",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          },
          "&:disabled": {
            backgroundColor: "#9e9e9e", 
            color: "#f0f0f0",
          },
        }}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </div>
  );
}

export default ContactForm;
