import {
  Box,
  Typography,
  Stack,
  Chip,
  Divider,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProjectCard(props) {
  const { title, description, tag, imgSrc, live, repo } = props.data;
  const theme = useTheme();
  const handleRedirect = (link) => {
    window.open(link);
  };
  return (
    <Box
      sx={{
        component: "section",
        border: "solid 1px rgba(0, 0, 0, 0.1)",
        padding: "2rem",
        borderRadius: "2rem",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        bgcolor: "rgb(244,244,244)",
      }}
    >
      <Box mb={1}>
        <Typography
          variant="h6"
          sx={{
            [theme.breakpoints.up("md")]: {},
          }}
        >
          {title}
        </Typography>
      </Box>
      <Stack>
        <Box
          component="img"
          src={imgSrc}
          alt="Project Picture"
          alignSelf="center"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            border: "solid 1px rgba(0, 0, 0, 0.3)",
            borderRadius: "1rem",
            mb: "1rem",
          }}
        />
      </Stack>

      <Stack mb={1}>
        <Typography variant="descriptions">{description}</Typography>
      </Stack>
      <Divider variant="fullWidth" direction="horizontal"></Divider>
      <Stack mt={1}>
        <Grid container spacing={1} mb={1}>
          {tag.map((item, index) => (
            <Grid item key={index}>
              <Chip label={item} />
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={1}>
          {live && live !== "" && (
            <Button
              variant="contained"
              endIcon={<OpenInNewIcon />}
              size="small"
              onClick={() => handleRedirect(live)}
              sx={{
                borderRadius: "2rem",
              }}
            >
              Live
            </Button>
          )}
          <Button
            variant="contained"
            endIcon={<GitHubIcon />}
            size="small"
            onClick={() => handleRedirect(repo)}
            sx={{
              borderRadius: "2rem",
            }}
          >
            Repo
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
