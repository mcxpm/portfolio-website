import * as React from "react";
import { Box, Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function InternshipCard(props) {
  const { company, duration, description, skills } = props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid #ccc",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: "rotateX(0deg)",
        "&:hover": {
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: { xs: "100%", md: 200 },
          px: 2,
          pt: 2,
          borderBottom: { xs: "1px solid #ccc", md: "none" },
          flexShrink: 0,
          minHeight: { xs: "auto", md: 150 },
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold">
            {company}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {duration}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {skills &&
              skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  size="small"
                />
              ))}
          </Stack>
        </CardContent>
      </Box>

      <Box
        sx={{
          flex: 1,
          px: 2,
          pt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography color="text.secondary" sx={{ fontSize: "15px" }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
