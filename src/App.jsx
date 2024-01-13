import NavBar from "./components/NavBar";
import Socials from "./components/Socials/Socials";
// import Projects from "./components/Projects";
import Experiences from "./components/Experience";
import Example from "./components/Projects/Projects";
import { Container, Fade } from "@mui/material";
import FullWidthTabs from "./components/Skills/Skills";
import FadeInSection from "./components/UI/FadeSection";
import Contact from "./components/Contact";
import ContactForm from "./components/Contact";

function App() {
  return (
    <Container maxWidth="xl" justifyContent="center">
      <NavBar></NavBar>
      <FadeInSection>
        <Socials></Socials>
      </FadeInSection>
      <Experiences></Experiences>
      <Container maxWidth="lg">
        <FadeInSection>
          <Example></Example>
        </FadeInSection>
      </Container>
      <FadeInSection>
        <FullWidthTabs></FullWidthTabs>
      </FadeInSection>
      <FadeInSection>
        <ContactForm></ContactForm>
      </FadeInSection>
    </Container>
  );
}

export default App;
