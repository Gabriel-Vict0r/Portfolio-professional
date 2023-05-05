import React from 'react'
import { Reveal } from 'react-reveal';
import '../../sass/components/cardService.sass'
import { useState } from 'react'
import DetailsCardService from "../../img/services/details_card_services.svg";

const CardService = ({ title, text, pathImg }) => {
  const [animation, setAnimation] = useState(false)
  return (
    <Reveal>
      <div
        onMouseOver={() => setAnimation(true)}
        onMouseLeave={() => setAnimation(false)}
        className={!animation ? "card-service" : "card-service animateBox"}
      >
        <img
          src={DetailsCardService}
          alt="detalhes plano de fundo"
          className="details"
        />
        <img src={pathImg} alt={title} className="card-service-img" />
        <h1
          className={
            !animation
              ? "card-service-title"
              : "card-service-title hightLightTextService"
          }
        >
          {title}
        </h1>
        <p className="card-service-text">{text}</p>
      </div>
    </Reveal>
  );
};

export default CardService