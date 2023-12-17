import { useTheme } from "@emotion/react";
import DevicesIcon from "@mui/icons-material/Devices";
import { Container, Box, Stack, Button, Typography } from "@mui/material";

export default function TimeSpent() {
  // const nextSectionRef = useRef(null);
  // const whiteSpaceAbove = 100;

  // const handleScroll = () => {
  //   if (nextSectionRef.current) {
  //     const offsetTopWithWhiteSpace =
  //       nextSectionRef.current.offsetTop - whiteSpaceAbove;
  //     window.scrollTo({
  //       top: offsetTopWithWhiteSpace,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Stack direction="row" justifyContent="space-between" mt={5} pr={10}>
        <Box>
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h4"
              mr={1.5}
              sx={{ fontWeight: theme.typography.fontWeightBold }}
              color="secondary.main"
            >
              3+
            </Typography>
            <DevicesIcon />
          </Stack>
          <Typography>Years Spent Coding</Typography>
        </Box>

        <Box>
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h4"
              mr={1.5}
              sx={{ fontWeight: theme.typography.fontWeightBold }}
              color="secondary.main"
            >
              7+
            </Typography>
            <DevicesIcon />
          </Stack>
          <Typography>Projects Built</Typography>
        </Box>

        <Box>
          <Stack direction="row" alignItems="center">
            <Typography
              variant="h4"
              mr={1.5}
              sx={{ fontWeight: theme.typography.fontWeightBold }}
              color="secondary.main"
            >
              1
            </Typography>
            <DevicesIcon />
          </Stack>
          <Typography>Tech Internships</Typography>
          <Typography>(Hopefully more to come)</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
