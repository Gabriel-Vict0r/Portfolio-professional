import React from "react";
import '../../sass/components/tracks.sass'
import Reveal from 'react-reveal/Reveal'
const Track = ({title, text}) => {
  return (
    <Reveal delay={5000} wait={1000} bottom={true}>
      <div className="track">
        <h2 className="track-title">{title}</h2>
        <p className="track-text">{text}</p>
      </div>
    </Reveal>
  );
};

export default Track;