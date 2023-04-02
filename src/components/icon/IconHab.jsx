import React from 'react'
import '../../sass/components/iconHab.sass'
import { useState } from 'react';
const IconHab = ({ iconName, name }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={!hover ? "hab" : "hab habHover"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={!hover ? "hab-icon" : "hab-icon habTextHover"}>
        {iconName}
      </span>
      <p className={!hover ? "hab-text" : "hab-text habTextHover"}>{name}</p>
    </div>
  );
}

export default IconHab