import { useTheme } from "@emotion/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Stack, Typography, Chip, Box } from "@mui/material";
import { experiencesData } from "../utils/data";

export default function Experiences() {
  const theme = useTheme();
  return (
    <Stack
      component="section"
      id="experiences"
      alignItems="center"
      mt={15}
      sx={{
        [theme.breakpoints.down("tablet")]: {
          mt: "3rem",
        },
      }}
    >
      <Typography
        variant="header1"
        className="hoverTranslate"
        mb={8}
        sx={{
          [theme.breakpoints.down("sm")]: {
            mb: "2rem",
          },
        }}
      >
        Experiences
      </Typography>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(244,244,244", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(244,244,243" }}
            iconStyle={{ background: "rgb(0,0,0", color: "#fff" }}
            icon={item.icon}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack mr={3}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1">{item.location}</Typography>
              </Stack>
              <Box
                component="img"
                src={item.src}
                alt="Work place thing"
                height={40}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              />
            </Stack>
            <Typography>{item.description}</Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>{item.date}</Typography>
              <Stack direction="row" spacing={1} mt={1.5}>
                {item.label.map((data, index) => (
                  <Chip label={data} key={index} />
                ))}
              </Stack>
            </Stack>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Stack>
  );
}
