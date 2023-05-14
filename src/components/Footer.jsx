import React from "react";
import { IoLogoWhatsapp, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import "../sass/components/widgets/footer.sass";
const Footer = ({ id }) => {
  return (
    <footer>
      <p>Copyright &copy; Gabriel Victor | Desenvolvedor Web 2023</p>
      <div className="icons">
        <a href="https://api.whatsapp.com/send?phone=7799030842" key={1}>
          <IoLogoWhatsapp className="icon-footer" />
        </a>
        <a href="https://github.com/Gabriel-Vict0r">
          <IoLogoGithub className="icon-footer" />
        </a>
        <a href="linkedin.com/in/gabriel-victor-webdeveloper/">
          <RiLinkedinBoxFill className="icon-footer" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;