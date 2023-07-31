import React from 'react'
import '../sass/components/widgets/WhoIAm.sass'
import { Reveal } from 'react-reveal';
import MyPicture from "../img/whoIAm/MyPicture.webp";
import CircleLeftWho from "../img/whoIAm/Circulo-right.svg";
const WhoIAm = ({ id }) => {
  return (
    <section className="about" id={id}>
      <div className="about-image">
        <Reveal>
          <img src={MyPicture} alt="Gabriel Victor foto" />
        </Reveal>
      </div>
      <article className="about-text">
        <img src={CircleLeftWho} alt="círculo decorativo" className="about-text-circle" />
        <Reveal>
          <h2>Quem eu sou</h2>
          <p>
            Desenvolvedor Web apaixonado por transformar ideias em soluções
            digitais eficientes e inovadoras. Sou formado como técnico em Informática pelo IFBA - campus
            Barreiras, e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Uninassau. Com muita disposição, ofereço habilidades
            sólidas em Javascript, ReactJs e TypeScript.
          </p>
        </Reveal>
      </article>
    </section>
  );
};

export default WhoIAm