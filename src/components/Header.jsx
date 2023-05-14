import Logo from "../img/start/Logo-complete.svg";
import "../sass/components/widgets/header.sass";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import ButtonContact from "./buttons/ButtonContact";
import { Link, animateScroll as scroll } from "react-scroll";
import { Reveal } from "react-reveal";
function Header() {
  const menu = [
    { name: "Início", link: "section_start", key: 1 },
    { name: "Serviços", link: "section_services", key: 2 },
    { name: "Habilidades", link: "section_habilities", key: 3 },
    { name: "Projetos", link: "section_projects", key: 4 },
    { name: "Sobre", link: "section_WhoIAm", key: 5 },
  ];
  let { innerWidth: width } = window;
  let isLarge = width <= 1024;
  const [isOpen, setOpen] = useState(false);
  const [colorActive, setActiveColor] = useState(false);
  useEffect(() => {
    if (!isLarge) {
      setOpen(true);

    }
  }, [isOpen]);

  //Switch the background-color from header
  useEffect(() => {
    function scrollPosition() {
      if (window.scrollY > 40) {
        setActiveColor(true);
      } else {
        setActiveColor(false);
      }
    }
    window.addEventListener("scroll", scrollPosition);
  }, []);
  console.log(isOpen)
  return (
    <Reveal top={true}>
      <header className={colorActive ? "header activeColor" : "header"}>
        <nav className="header-nav">
          <Link
            to="section_start"
            smooth={true}
            offset={-190}
            duration={900}
            delay={100}
          >
            <img
              src={Logo}
              alt="logo"
              className="header-nav-logo"
              // onClick={this.scrollToTop}
            />
          </Link>
          {isLarge && (
            <Hamburger
              color="#F0F0F0"
              rounded
              toggled={isOpen}
              toggle={() => (isOpen ? setTimeout(() => {
                setOpen(false)
              }, 100) : setOpen(true))}
            />
          )}
          
          {isOpen && (
            <ul className={isOpen ? "header-nav-list" : "contain_Menu"}>
              {menu.map((element) => (
                <li key={element.key}>
                  <Link
                    activeClass="active"
                    to={`${element.link}`}
                    smooth={true}
                    offset={-190}
                    duration={900}
                    delay={100}
                    className={"header-nav-list-link"}
                    onClick={() => setOpen(false)}
                  >
                    {element.name}
                  </Link>
                </li>
              ))}
              {isLarge ? (
                <Link
                  to="section_ContactMe"
                  smooth={true}
                  offset={-190}
                  duration={900}
                  delay={100}
                  onClick={() => setOpen(false)}
                >
                  <ButtonContact
                    subClass="btn_contactLarge"
                    textButton="Contate-me"
                  />
                </Link>
              ) : null}
            </ul>
          )}
          {!isLarge && (
            <Link
              to="section_ContactMe"
              smooth={true}
              offset={-190}
              duration={900}
              delay={100}
            >
              <ButtonContact subClass="btn_contactMe" textButton="Contate-me" />
            </Link>
          )}
        </nav>
      </header>
    </Reveal>
  );
}

export default Header;
