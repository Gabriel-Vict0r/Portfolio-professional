import React from "react";
import CardService from "./CardsServices/CardService";
import {copyServices} from "../Copy/copy";
import "../sass/components/widgets/services.sass";
import ButtonContact from "./buttons/ButtonContact";
import { Reveal } from "react-reveal";
import { Link } from "react-scroll";
import ElementLeft from "../img/services/Elemento1 - left.svg";
import LightRight from "../img/services/Luz 3 - right.svg";
import RetangleBackground from "../img/services/Rectangle Background.svg";
import LightLeft from "../img/services/Luz.svg";
function Services({ id }) {
  return (
    <section className="container-services" id={id}>
      <div className="services">
        <Reveal delay={5000} left={true}>
          <img src={ElementLeft} alt="luz" className="elemento-left" />
        </Reveal>
        {copyServices.map((element) => (
          <CardService
            title={element.name}
            text={element.text}
            pathImg={element.img}
            key={element.name}
          />
        ))}
        <Reveal>
          <img src={LightRight} alt="luz" className="light-right" />
        </Reveal>
        <Reveal delay={3000} bottom={true}>
          <img
            src={RetangleBackground}
            alt="detalhe de um retângulo"
            className="retangle-right"
          />
        </Reveal>
        <Reveal>
          <img src={LightLeft} alt="Luz" className="light-left" />
        </Reveal>
      </div>
      <Reveal bottom={true}>
        <Link
          to="section_ContactMe"
          smooth={true}
          offset={-190}
          duration={900}
          delay={100}
        >
          <ButtonContact
            subClass="btn_contactMe btnService"
            textButton="Tirar Idéia do papel"
          />
        </Link>
      </Reveal>
    </section>
  );
}

export default Services;
