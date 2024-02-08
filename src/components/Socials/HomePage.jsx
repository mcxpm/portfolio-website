import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import SocialButtons from "./SocialButtons";
import { useSocialData } from "../../hooks/useSocialData";
import { useResume } from "../../hooks/useResume";

export default function SocialsTest() {
  const resume = useResume();
  const theme = useTheme();
  const socialData = useSocialData();
  const handleEmailRedirect = () => {
    window.location.href =
      "mailto:markuslec@gmail.com?subject=Portfolio%20Query";
  };

  const handleResumeRedirect = () => {
    window.open(resume, "_blank");
  };

  const matches = useMediaQuery("(min-width: 900px)");
  return (
    <Stack
      height="100vh"
      component="section"
      direction={matches ? "row" : "column"}
      id="home"
      spacing={matches ? 20 : 5}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        sx={{
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
          width: { xs: "20rem", md: "23rem", lg: "28rem" },
          height: "auto",
        }}
        alt="profile-picture"
        src="/assets/profile-pic/Picture1.jpg"
      />

      <Stack direction="column" alignItems="center">
        <Typography fontSize={20}>Hello, I&apos;m</Typography>
        <Typography
          fontSize={60}
          sx={{
            color: "primary.main",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "2.5rem",
            },
          }}
        >
          Markus Lim
        </Typography>
        <Typography
          fontSize={25}
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem",
            },
          }}
        >
          Software Engineer, Problem Solver
        </Typography>
        <Stack direction="row" spacing={5} mt="1.5rem">
          <Button
            variant="outlined"
            style={{ borderRadius: "3rem", minWidth: "130px" }}
            onClick={handleResumeRedirect}
          >
            Download CV
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: "3rem", minWidth: "130px" }}
            onClick={handleEmailRedirect}
          >
            Email Me
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={4} direction={matches ? "column" : "row"}>
        {socialData.map((item, index) => (
          <SocialButtons
            iconName={item.icon}
            link={item.link}
            key={index}
            title={item.title}
            size={24}
            color="black"
            placement="right"
          ></SocialButtons>
        ))}
      </Stack>
    </Stack>
  );
}
