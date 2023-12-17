import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
// import Projects from "./components/Projects";
import Experiences from "./components/Experience";
import Example from "./components/Projects";
import { Container } from "@mui/material";

function App() {

  return (
    <Container maxWidth="xl" justifyContent="center">
      <NavBar></NavBar>
      <Socials></Socials>
      {/* <Projects></Projects> */}
      <Experiences></Experiences>
      <Container maxWidth="lg">
        <Example></Example>
      </Container>
    </Container>
  );
}

export default App;
