import Intro from "./components/left";
import { Container } from "@mui/material";
import ContactForm from "./components/contactform";
import About from "./components/right";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Intro></Intro>
      <About></About>
    </Container>
  );
} 
