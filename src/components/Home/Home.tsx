import React from "react";
import "./style.scss";
import { PiGithubLogoLight } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { PiGlobeLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="wrapper home_wrapper">
      <div className="container home_container">
        <h1>Diário de Progresso</h1>
        <h2>Projetos</h2>
        <div className="home_cards_container wrapper">
          <a className="home_card wrapper button">Projeto #1</a>
          <a className="home_card wrapper button">Projeto #2</a>
          <a className="home_card wrapper button">Projeto #3</a>
          <a className="home_card wrapper button">Projeto #4</a>
          <a className="home_card wrapper button">Projeto #5</a>
          <a className="home_card wrapper button">Projeto #6</a>
          <a className="home_card wrapper button">Projeto #7</a>
          <a className="home_card wrapper button">Projeto #8</a>
        </div>
        <div className="home_socialmedia_container wrapper">
          <h4>Siga-me nas redes sociais!</h4>
          <div className="home_socialmedia_icons_container">
            <a
              href="https://itsimoes.pro"
              rel="noreferrer"
              target="_blank"
              className="home_socialmedia_icon wrapper button socialmedia_button"
            >
              <PiGlobeLight />
            </a>
            <a
              href="https://github.com/itsimoes"
              rel="noreferrer"
              target="_blank"
              className="home_socialmedia_icon wrapper button socialmedia_button"
            >
              <PiGithubLogoLight />
            </a>
            <a
              href="https://www.linkedin.com/in/itsimoes"
              rel="noreferrer"
              target="_blank"
              className="home_socialmedia_icon wrapper button socialmedia_button"
            >
              <PiLinkedinLogoLight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
