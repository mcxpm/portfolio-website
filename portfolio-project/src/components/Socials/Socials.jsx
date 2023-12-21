import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import DevicesTwoToneIcon from "@mui/icons-material/DevicesTwoTone";
import FactCheckTwoToneIcon from "@mui/icons-material/FactCheckTwoTone";
import WorkOffTwoToneIcon from "@mui/icons-material/WorkOffTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SocialButtons from "./SocialButtons";
import { useSocialData } from "../../hooks/useSocialData";

export default function Socials() {
  const theme = useTheme();
  const socialData = useSocialData();
  const handleEmailRedirect = () => {
    window.location.href =
      "mailto:markuslec@gmail.com?subject=Portfolio%20Query";
  };

  const matches = useMediaQuery("(min-width: 900px)");
  const marginx = matches ? 8 : 2;
  const marginy = matches ? 20 : 8;

  return (
    <Stack component="section" direction="row" spacing={2} id="about">
      {matches && (
        <Stack pt={25}>
          <Box
            component="img"
            sx={{
              objectFit: "cover",
              display: { md: "block" },
              [theme.breakpoints.up("md")]: {
                width: "18rem",
              },
              [theme.breakpoints.up("lg")]: {
                width: "25rem",
              },
            }}
            alt="profile-picture"
            src="/assets/github-mark/github-mark.png"
          />
        </Stack>
      )}

      <Stack px={marginx} pt={marginy}>
        <Stack direction="row" alignItems="center">
          <Typography fontSize={30} mr={1}>
            Hi{" "}
            <span
              role="img"
              aria-label="waving-hand"
              style={{ fontSize: "2rem" }}
            >
              {"\uD83D\uDC4B"}! I am
            </span>
            <Typography
              component="span"
              variant="inherit"
              sx={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "primary.main",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem",
                },
              }}
            >
              {" "}
              Markus Lim
            </Typography>
          </Typography>
        </Stack>

        <Typography
          fontSize={23}
          mt={2}
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem",
            },
          }}
        >
          Software Engineer and Problem Solver
        </Typography>
        <Typography mt={4} align="left">
          I am a second-year undergraduate enrolled in the Renaissance
          Engineering Programme at Nanyang Technological University. My academic
          journey blends technical expertise with a keen interest in business
          development.
        </Typography>

        <Typography mt={3} align="left">
          I have a robust foundation in both domains and a particular interest
          for web development and artificial intelligence. Currently, I am
          actively seeking opportunities in these dynamic sectors to further
          contribute and grow.
        </Typography>

        <Stack
          direction="row"
          justifyContent={{ xs: "space-around", inBetw: "space-between" }}
          mt={5}
          mb={3}
        >
          <Box>
            <Stack direction="row" alignItems="center">
              <Typography
                variant="h4"
                mr={1.5}
                sx={{ fontWeight: theme.typography.fontWeightBold }}
                color="secondary.main"
              >
                1+
              </Typography>
              <DevicesTwoToneIcon />
            </Stack>
            <Typography>Years Experience</Typography>
          </Box>

          <Box>
            <Stack direction="row" alignItems="center">
              <Typography
                variant="h4"
                mr={1.5}
                sx={{ fontWeight: theme.typography.fontWeightBold }}
                color="secondary.main"
              >
                4+
              </Typography>
              <FactCheckTwoToneIcon />
            </Stack>
            <Typography>Projects Built</Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", inBetw: "block" } }}>
            <Stack direction="row" alignItems="center">
              <Typography
                variant="h4"
                mr={1.5}
                sx={{ fontWeight: theme.typography.fontWeightBold }}
                color="secondary.main"
              >
                1
              </Typography>
              <WorkOffTwoToneIcon />
            </Stack>
            <Typography>Tech Internships</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              (Hopefully more to come)
            </Typography>
          </Box>
        </Stack>
        <Button
          sx={{
            color: "#000",
            fontWeight: "500",
            border: "solid 2px",
            borderRadius: "2rem",
            minWidth: "30%",
          }}
          endIcon={<EmailOutlinedIcon />}
          onClick={handleEmailRedirect}
        >
          <Typography variant="description1">Contact Me</Typography>
        </Button>
      </Stack>

      <Stack
        spacing={4}
        pt={40}
        display="flex"
        ml="auto"
        sx={{
          [theme.breakpoints.down("sm")]: {
            mr: "1rem",
          },
        }}
      >
        {socialData.map((item, index) => (
          <SocialButtons
            iconName={item.icon}
            link={item.link}
            key={index}
          ></SocialButtons>
        ))}
      </Stack>
    </Stack>
  );
}
