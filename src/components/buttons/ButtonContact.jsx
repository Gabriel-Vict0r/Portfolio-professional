import React from "react";
import "../../sass/components/buttonContact.sass";

const ButtonContact = ({subClass, textButton}) => {
  return <button className={subClass}>{textButton}</button>;
};

export default ButtonContact;