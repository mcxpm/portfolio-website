/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import Item from "../UI/Item";

export default function SkillsCard(props) {
  const { tags, level, imgUrl } = props.data;
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
        bgcolor: "rgb(244,244,244)",
      }}
    >
      <Stack
        direction={{
          xs: "column",
          inBetw: "row",
        }}
        justifyContent="space-around"
        alignItems="center"
        spacing={{
          xs: "1.5rem",
          inBetw: "0px",
        }}
      >
        {tags.map((tag, index) => (
          <Item
            key={index}
            language={tag}
            exp={level[index]}
            imgSrc={imgUrl[index]}
          ></Item>
        ))}
      </Stack>
    </Box>
  );
}
