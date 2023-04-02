import { useState, useEffect, CSSProperties } from "react";
import "./sass/main.sass";
import Header from "./components/Header";
import Start from "./components/Start";
import Container from "./components/Container";
import Services from "./components/Services";
import Track from "./components/tracks/Track";
import Habilities from "./components/Habilities";
import Projects from "./components/Projects";
import TrackAnimated from "./components/trackAnimetaded/TrackAnimated";
import WhoIAm from "./components/WhoIAm";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { BounceLoader } from "react-spinners";
function App() {
  const copyServices = { title: "Serviços", text: "Como eu posso te ajudar?" };
  const copyProjects = {
    title: "Projetos",
    text: "Alguns destes projetos fazem parte do meu trabalho como freelancer e outros são projetos criados para prática de estudos.",
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const override = {
    display: "block",
    margin: "300px auto",
    borderColor: "red",
  };
  return loading ? (
    <>
      <BounceLoader
        color={"#2361FF"}
        loading={loading}
        cssOverride={override}
        size={100}
        data-testid="loader"
      />
    </>
  ) : (
    <div className="App">
      <Container>
        <Header />
        <Start id="section_start" />
      </Container>
      <Track title={copyServices.title} text={copyServices.text} />
      <Container>
        <Services id="section_services" />
        <Habilities id='section_habilities'/>
      </Container>
      <Track title={copyProjects.title} text={copyProjects.text} />
      <Projects id="section_projects" />
      <TrackAnimated text="Desenvolvedor Web" />
      <Container>
        <WhoIAm id="section_WhoIAm" />
      </Container>
      <Container>
        <ContactMe id="section_ContactMe" />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
