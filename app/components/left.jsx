import * as React from "react";
import {
  Typography,
  Stack,
  Box,
  Tooltip,
  Container,
  Card,
} from "@mui/material";
import SocialButtons from "./social_buttons";
import ContactForm from "./contactform";

export default function Intro() {
  return (
    <Container
      sx={{
        position: { xs: "static", md: "fixed" },
        height: { xs: "auto", md: "100vh" },
        width: { xs: "100%", md: "auto" },
        mb: { xs: 4, md: 0 },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "40%" }, pt: 10 }}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Markus Lim
          </Typography>
          <Typography sx={{ fontSize: 27, fontWeight: "bold" }}>
            Software Engineer
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            I aim to build optimized systems with a focus on <b>performance</b>,{" "}
            <b>scalability</b>, and <b>minimal latency</b>. Feel free to contact
            me below.
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "40%" } }}>
        <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
          <SocialButtons
            iconName="LinkedInIcon"
            link="https://linkedin.com/in/markus-lim-en-cheng"
            title="Connect on LinkedIn"
            color="#0077B5"
          />
          <SocialButtons
            iconName="GitHubIcon"
            link="https://github.com/mcxpm"
            title="View my GitHub"
            color="#24292e"
          />
          <SocialButtons
            iconName="FileOpenIcon"
            isResume={true}
            title="Download Resume"
            color="#ff5722"
          />
        </Stack>
        <ContactForm></ContactForm>
      </Box>
    </Container>
  );
}
