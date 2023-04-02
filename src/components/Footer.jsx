import React from "react";
import { IoLogoWhatsapp, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import "../sass/components/widgets/footer.sass";
const Footer = ({ id }) => {
  return (
    <footer>
      <p>Copyright &copy; Gabriel Victor | Desenvolvedor Web 2023</p>
      <div className="icons">
        <a href="http://" key={1}>
          <IoLogoWhatsapp className="icon-footer" />
        </a>
        <a href="http://">
          <IoLogoGithub className="icon-footer" />
        </a>
        <a href="http://">
          <RiInstagramFill className="icon-footer" />
        </a>
        <a href="http://">
          <RiLinkedinBoxFill className="icon-footer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
