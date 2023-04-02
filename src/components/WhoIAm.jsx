import React from 'react'
import '../sass/components/widgets/WhoIAm.sass'
import { Reveal } from 'react-reveal';
import MyPicture from "../img/whoIAm/Foto do Expert.svg";
import CircleLeftWho from "../img/whoIAm/Circulo-right.svg";
const WhoIAm = ({ id }) => {
  return (
    <section className="about" id={id}>
      <div className="about-image">
        <Reveal delay={5000} left={true}>
          <img src={MyPicture} alt="Gabriel Victor foto" />
        </Reveal>
      </div>
      <article className="about-text">
        <img src={CircleLeftWho} alt="círculo decorativo" className="about-text-circle" />
        <Reveal right={true}>
          <h2>Quem eu sou</h2>
          <p>
            Desenvolvedor Web apaixonado por transformar ideias em soluções
            digitais eficientes e inovadoras. Sou formado como técnico em Informática pelo IFBA - campus
            Barreiras, e atualmente estou cursando Big Data & Inteligência Artificial na PUC-GO. Com mais de 2 anos de experiência, ofereço habilidades
            sólidas em Javascript, ReactJs, sass, NodeJs e MongoDb.
          </p>
        </Reveal>
      </article>
    </section>
  );
};

export default WhoIAm