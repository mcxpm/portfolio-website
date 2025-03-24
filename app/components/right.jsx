import * as React from "react";
import { Typography, Box, Container, Card, Button, Stack } from "@mui/material";
import ThemeToggle from "../ThemeToggle";
import InternshipCard from "./internshipcard";
import ProjectCard from "./projectcard";

export default function About() {
  return (
    <Container>
      <Box
        sx={{
          width: "55%",
          marginLeft: "45%",
          overflow: "visible",
          pt: 10,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            About
          </Typography>
          <Box flexGrow={1} height="1px" bgcolor="text.primary" />
          <ThemeToggle></ThemeToggle>
        </Box>
        <Box>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            I'm a Year 3 student in Nanyang Technological University, enrolled
            in the Renaissance Engineering Programme (Computer Science).
          </Typography>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            From a young age, I was <b>curious about everything</b>—but not
            deeply passionate; things often fall out of interest as quick as
            they fall in.
          </Typography>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            This left me feeling lost, especially when it came to career
            choices, since nothing particularly stood out. I considered
            everything from medicine pre-uni to management consulting,
            <b>dabbling in many areas but mastering none.</b>
          </Typography>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            Eventually, a friend convinced me to join a{" "}
            <b>simple programming contest</b> where it was essentially trying to
            solve PSLE math questions with code.
          </Typography>
          <Typography
            sx={{ width: "90%", mt: 2, fontSize: "15px", fontWeight: "bold" }}
          >
            And that just felt right
          </Typography>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            Designing fast programs, <b>thinking out of the box</b>, iterating
            and improving on solutions seemed fascinating and exciting. Fast
            forward 2 years and several internships later, I am enjoying my
            exchange in UC Berkeley, studying key mods like{" "}
            <b>Computer Architecture and Compiler Optimisations</b>.
          </Typography>
          <Typography sx={{ width: "90%", mt: 2, fontSize: "15px" }}>
            To that end, I aim to <b>engineer low-latency systems</b> and work
            on cutting-edge optimisations that push the limits of performance.
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mt={5}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Internships
          </Typography>
          <Box flexGrow={1} height="1px" bgcolor="text.primary" />
        </Box>
        <Stack spacing={2} mt={3}>
          <InternshipCard
            company="Goldman Sachs"
            duration="May 2025 – Aug 2025"
            description="Incoming Engineering Summer Analyst in the Data Engineering Team"
          />
          <InternshipCard
            company="TikTok"
            duration="Apr 2024 – Aug 2024"
            description="I optimise the training and serving of large language models deployed internally. I also changed the pretrain data architecture, reducing training time and compute cost"
            skills={["LLMs", "Spark", "Pytorch"]}
          />
          <InternshipCard
            company="A Parent Thing"
            duration="Jan 2024 – Mar 2024"
            description="I developed the entire website, enabling user engagement through features like authentication, voting, commenting, and replying to parenting queries, with Next.js, Prisma, PostgreSQL for scalability and reliability"
            skills={["React", "Node.js", "DB"]}
          />
        </Stack>
        <Box display="flex" alignItems="center" gap={1} mt={5}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Projects
          </Typography>
          <Box flexGrow={1} height="1px" bgcolor="text.primary" />
        </Box>
        <Stack spacing={2} mt={3} mb={3}>
          <ProjectCard
            image="/teaser.png"
            title="LLM Scavenger Hunt"
            description="UC Berkeley RDI hackathon (2nd Runner Up). We created a new benchmark for VLN tasks, integrating LLM agents into a dynamic, graph like environment. We implemented a QA approach, testing the spatial and long-term history of LLM agents"
            url="https://github.com/Kyunnilee/llm_scavengerhunt"
          />
          <ProjectCard
            image="/RentSG_Picture.png"
            title="Rent SG"
            description="HacX (1st Runner Up). A simple, mobile-first web application designed to help track overstayers. While technically straightforward, our solution significantly simplifies ICA’s task of monitoring and ensuring that rentees do not exceed their visa or rental periods."
            url="https://github.com/mcxpm/RentSG"
          />
          <ProjectCard
            image="/164.png"
            title="Compilers / Optimisation"
            description="Part of the UC Berkeley CS164 module, we built a compiler and interpreter from scratch, including learning about multiple optimisations like tail-end recursion"
            url="https://berkeley-cs164-sp25.github.io/"
          />
        </Stack>
      </Box>
    </Container>
  );
}
