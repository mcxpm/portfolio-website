import { Box, Typography, Stack, Grid } from "@mui/material";

export default function SkillsCard(props) {
  const { id, title, tags, level } = props.data;
  console.log(title);

  return (
    <Box
      sx={{
        component: "section",
        border: "solid 1px rgba(0, 0, 0, 0.3)",
        padding: "1.5rem 2rem",
        borderRadius: "2rem",
        mb: "0.5rem",
        transition: "300ms",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          Hello
        </Grid>
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>{" "}
        <Grid item xs={6}>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
