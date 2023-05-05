import React from "react";
import "../sass/components/widgets/start.sass";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Reveal from "react-reveal/Reveal";
import CircleLeft from "../img/start/Circulo1-left.svg";
import Computer from '../img/start/Computador.svg'
function Start({ id }) {
  return (
    <section className="first-content" id={id}>
      <div className="svg-light-left"></div>
      <Reveal>
        <article className="copy">
          <img src={CircleLeft} alt="circulo decorativo" className="circle" />
          <h1 className="copy-title">
            Olá, meu nome é Gabriel Victor, um
            <span className="copy-title-highlight"> desenvolvedor web</span>
          </h1>
          <p className="copy-text">
            Junte-se a mim para criarmos juntos projetos incríveis que irão
            impactar positivamente sua empresa e seus usuários.
          </p>
        </article>
      </Reveal>
      <Reveal >
        <img src={Computer} alt="Computador" className="computer" />
      </Reveal>
      <div className="svg-light-right"></div>
    </section>
  );
}

export default Start;
