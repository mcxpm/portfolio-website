"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Tooltip,
} from "@mui/material";

export default function ProjectCard(props) {
  const { image, title, description, url, tooltipText } = props;

  const handleCardClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Tooltip title={tooltipText || "Click for Github project"} placement="top">
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
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            transform: "translateY(-8px)",
          },
        }}
        onClick={handleCardClick}
        aria-label={`Open ${title} in a new tab`}
      >
        <CardMedia
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: "100%", md: 200 },
            height: { xs: 200, md: "auto" },
            objectFit: "contain",
            flexShrink: 0,
          }}
        />

        <Box
          sx={{
            flex: 1,
            px: 2,
            pt: 2,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h6" fontWeight="bold">
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: "15px", mt: 1 }}>
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Tooltip>
  );
}
