import NavBar from "./components/NavBar";
import Socials from "./components/Socials/Socials";
// import Projects from "./components/Projects";
import Experiences from "./components/Experience";
import Example from "./components/Projects/Projects";
import { Container } from "@mui/material";
import FullWidthTabs from "./components/Skills/Skills";
import FadeInSection from "./components/UI/FadeSection";

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
    </Container>
  );
}

export default App;
