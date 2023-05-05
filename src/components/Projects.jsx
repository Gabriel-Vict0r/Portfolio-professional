import React from "react";
import CardProject from "./cardProjects/CardProject";
import { projects } from "../Copy/copy";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../sass/components/widgets/projects.sass";
import { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import ElementProject from "../img/projects/Elemento 1.svg";
import LightProjet from "../img/projects/Luz.svg";
import RetangleBg from "../img/projects/Rectangle Background.svg";

function Projects({ id }) {
  const [repositores, setRepositories] = useState([]);
  const url = "https://api.github.com/users/Gabriel-vict0r/repos";
  useEffect(() => {
    fetch(url, {
      headers: { Authorization: "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" },
    })
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.log(error));
  }, []);
  const filterProjects = repositores.filter(
    (element) => element.license != null
  );
  const regexProjects = /-/ig;
  return (
    <section className="projects" id={id}>
      <Reveal>
        <img
          src={ElementProject}
          alt="elemento decorativo"
          className="element-bg"
        />
      </Reveal>
      <img src={LightProjet} alt="luz decorativa" className="light-bg" />
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={1}
        navigation
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
        }}
      >
        <img
          src={RetangleBg}
          alt="retângulo decorativo"
          className="retangle-bg"
        />
        {filterProjects.map((repository) => (
          <Reveal >
            <SwiperSlide key={repository.id}>
              <CardProject
                title={repository.name.replace(regexProjects, " ")}
                text={repository.description}
                urlImage="src\img\projects\bg_project1.svg"
                urlProject={repository.homepage}
                data_project={2023}
                key={repository.id}
              />
            </SwiperSlide>
          </Reveal>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;