import React from "react";

import {
  DiJavascript,
  DiCss3,
  DiReact,
  DiSass,
  DiNodejsSmall
} from "react-icons/di";

import {
  SiJquery,
  SiMongodb,
} from "react-icons/si";

import { AiFillHtml5 } from "react-icons/ai";
import { GiJesterHat } from "react-icons/gi";
import IconHab from "./icon/IconHab";
import '../sass/components/widgets/habilities.sass'
import { Reveal } from "react-reveal";
import ElementHab from "../img/habilities/Elemento.svg";

const Habilities = ({ id }) => {
  return (
    <section className="habilities" id={id}>
      <div className="habilities-container">
        <h2 className="habilities-container-title">Habilidades</h2>
        <div className="habilities-container-icons">
          <IconHab iconName={<AiFillHtml5 />} name="HTML5" />
          <IconHab iconName={<DiCss3 />} name="CSS3" />
          <IconHab iconName={<DiJavascript />} name="Javascript" />
          <IconHab iconName={<DiReact />} name="ReactJs" />
          <IconHab iconName={<DiSass />} name="SASS" />
          <IconHab iconName={<DiNodejsSmall />} name="NodeJs" />
          <IconHab iconName={<SiMongodb />} name="Mongodb" />
          <IconHab iconName={<GiJesterHat />} name="Testes Unitários" />
        </div>
      </div>
      <Reveal right={true}>
        <img
          src={ElementHab}
          alt="elemento decorativo"
          className="element-hab"
        />
      </Reveal>
    </section>
  );
};

export default Habilities;
