import {
  Stack,
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DevicesTwoToneIcon from "@mui/icons-material/DevicesTwoTone";
import FactCheckTwoToneIcon from "@mui/icons-material/FactCheckTwoTone";
import BasicTabs from "../Skills/Skills";

export default function AboutMe() {
  const theme = useTheme();
  const isMediumUp = useMediaQuery("(min-width: 1100px)");

  return (
    <Container maxWidth="xl" justifyContent="center">
      <Box
        component="section"
        id="about"
        mt="7rem"
        pb="3rem"
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
          [theme.breakpoints.down("sm")]: {
            mb: "2rem",
          },
        }}
      >
        <Typography variant="h4">About Me</Typography>
      </Box>
      <Stack
        direction={isMediumUp ? "row" : "column"}
        justifyContent="space-between"
        spacing={1} // Add some spacing between elements when stacked in column
      >
        {isMediumUp && (
          <Box
            component="img"
            sx={{
              objectFit: "cover",
              borderRadius: "3rem",
              width: { md: "23rem", lg: "28rem" },
              height: "auto",
            }}
            alt="happy-place"
            src="/assets/profile-pic/Picture2.jpg"
          />
        )}
        <Stack direction="column" spacing={2}>
          <Stack
            direction={isMediumUp ? "row" : "column"}
            justifyContent="space-between"
            spacing={2} // Add spacing between Papers when in column layout
          >
            <Paper
              elevation={4}
              sx={{
                borderRadius: "1rem",
                border: "1px solid #f2f2f2",
                minHeight: "auto", // Allow Paper to expand as needed
                padding: { xs: "1rem", md: "2rem" }, // Responsive padding
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: { md: "250px", lg: "330px" }, // Maximum width of 300px on medium and larger screens
                mx: "auto", // Center the Paper components within their parent Stack
              }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <DevicesTwoToneIcon />
                <Typography variant="header1">Experience</Typography>
                <Typography
                  fontSize={23}
                  sx={{ fontWeight: theme.typography.fontWeightBold }}
                  color="secondary.main"
                >
                  2+ Years
                </Typography>
                <Typography variant="body2">FullStack Developer</Typography>
              </Stack>
            </Paper>
            <Paper
              elevation={4}
              sx={{
                borderRadius: "1rem",
                border: "1px solid #f2f2f2",
                minHeight: "auto", // Allow Paper to expand as needed
                padding: { xs: "1rem", md: "2rem" }, // Responsive padding
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: { md: "250px", lg: "330px" }, // Maximum width of 300px on medium and larger screens
                mx: "auto", // Center the Paper components within their parent Stack
              }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <FactCheckTwoToneIcon />
                <Typography variant="header1">Projects Built</Typography>
                <Typography
                  fontSize={23}
                  sx={{ fontWeight: theme.typography.fontWeightBold }}
                  color="secondary.main"
                >
                  5+ Years
                </Typography>
                <Typography variant="body2">
                  More waiting in the kitchen
                </Typography>
              </Stack>
            </Paper>
          </Stack>
          <Paper
            elevation={4}
            sx={{
              borderRadius: "1rem",
              border: "1px solid #f2f2f2",
              minHeight: "auto", // Allow Paper to expand as needed
              padding: { xs: "1rem", md: "2rem" }, // Responsive padding
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: { md: "250px", lg: "300px" }, // Maximum width of 300px on medium and larger screens
              maxWidth: { lg: "780px" },
              mx: "auto", // Center the Paper components within their parent Stack
            }}
          >
            <Stack textAlign="justify">
              <Typography fontFamily="Segoe UI">
                I am a driven second-year undergraduate enrolled in the
                Renaissance Engineering Programme at Nanyang Technological
                University. My academic journey blends technical expertise with
                a keen interest in business development.
              </Typography>

              <Typography mt={3} fontFamily="Segoe UI">
                I have a robust foundation in both domains and a particular
                interest for web development and artificial intelligence.{" "}
                <Typography
                  component="span"
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      display: "none",
                    },
                  }}
                >
                  Whether I am working on web or business development, I bring
                  my commitment and problem solving to every project that I work
                  on.
                </Typography>
                I look forward to the opportunity to bring my skills to your
                next project!
              </Typography>
            </Stack>
          </Paper>
          <BasicTabs></BasicTabs>
        </Stack>
      </Stack>
    </Container>
  );
}
