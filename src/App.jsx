import NavBar from "./components/NavBar";
import Experiences from "./components/Experience";
import Example from "./components/Projects/Projects";
import { Container } from "@mui/material";
import AboutMe from "./components/Socials/AboutMe";
import FadeInSection from "./components/UI/FadeSection";
import ContactForm from "./components/Contact";
import SocialsTest from "./components/Socials/HomePage";

function App() {
  return (
    <Container maxWidth="xl" justifyContent="center">
      <NavBar></NavBar>
      {/* <FadeInSection>
        <Socials></Socials>
      </FadeInSection> */}{" "}
      <FadeInSection>
        <SocialsTest></SocialsTest>
      </FadeInSection>
      <FadeInSection>
        <AboutMe></AboutMe>
      </FadeInSection>
      <Experiences></Experiences>
      <Container maxWidth="lg">
        <FadeInSection>
          <Example></Example>
        </FadeInSection>
      </Container>
      {/* <FadeInSection>
        <FullWidthTabs></FullWidthTabs>
      </FadeInSection> */}
      <FadeInSection>
        <ContactForm></ContactForm>
      </FadeInSection>
    </Container>
  );
}

export default App;
