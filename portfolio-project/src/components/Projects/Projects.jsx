import { useTheme } from "@emotion/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, IconButton, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { carouselItems } from "../../utils/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Example() {
  const theme = useTheme();
  return (
    <Stack
      component="section"
      id="projects"
      mt={15}
      sx={{
        [theme.breakpoints.down("tablet")]: {
          mt: "3rem",
        },
      }}
    >
      <Typography
        variant="h4"
        alignSelf="center"
        mb={8}
        sx={{
          [theme.breakpoints.down("sm")]: {
            mb: "2rem",
          },
        }}
      >
        Projects
      </Typography>
      <Stack direction="row" spacing={1} mb={3}>
        <Stack
          alignSelf="center"
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <IconButton className="projects__swiper-prev">
            <ArrowBackIosIcon />
          </IconButton>
        </Stack>
        <Swiper
          className="projects__swiper"
          grabCursor={true}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".projects__swiper-next",
            prevEl: ".projects__swiper-prev",
          }}
          modules={[Pagination, Navigation]}
        >
          {carouselItems.map((data, index) => (
            <SwiperSlide className="projects__card-wrapper" key={index}>
              <ProjectCard data={data}></ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack
          alignSelf="center"
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <IconButton className="projects__swiper-next">
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
