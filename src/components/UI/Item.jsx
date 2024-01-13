import { Stack, Typography, Box } from "@mui/material";

export default function Item(props) {
  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
  const finalUrl = `${baseUrl}${props.imgSrc}/${props.imgSrc}-original.svg`;
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box component="img" src={finalUrl} width={40} height="auto"></Box>
      <Stack alignItems="left" mb={1}>
        <Typography variant="h6">{props.language}</Typography>
        <Typography variant="subtitle1">{props.exp}</Typography>
      </Stack>
    </Stack>
  );
}
