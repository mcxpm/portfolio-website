"use client";

import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase.js";
import { useState, useEffect } from "react";

export default function SocialButtons(props) {
  const [resumeUrl, setResumeUrl] = useState(null);

  const icons = {
    LinkedInIcon,
    GitHubIcon,
    FileOpenIcon,
  };

  useEffect(() => {
    // Only fetch the resume URL if this is a resume button
    if (props.isResume) {
      const storageRef = ref(storage, "documents/CVFinal - Copy.pdf");
      getDownloadURL(storageRef)
        .then((url) => setResumeUrl(url))
        .catch((e) => {
          console.log(`Error fetching resume from Firebase:\n${e.message}`);
        });
    }
  }, [props.isResume]);

  const handleClick = () => {
    if (props.isResume && resumeUrl) {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } else if (props.link) {
      window.open(props.link, "_blank", "noopener,noreferrer");
    } else {
      console.error("No link provided for SocialButton");
    }
  };

  const Icon = icons[props.iconName] || icons.FileOpenIcon;

  return (
    <Tooltip title={props.title || ""} placement={props.placement || "top"}>
      <IconButton
        sx={{
          height: props.size || "50px",
          width: props.size || "50px",
          color: props.color || "inherit",
          padding: 0, 
          margin: 0,
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
        onClick={handleClick}
        aria-label={props.title || props.iconName || "Social link"}
        disabled={props.isResume && !resumeUrl}
      >
        <Icon fontSize={props.fontSize || "medium"} />
      </IconButton>
    </Tooltip>
  );
}
