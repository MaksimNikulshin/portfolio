//Import components
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//Import styles
import "../assets/styles/header.scss";

export default function Header() {
  //Initialization state manager
  const [burger, setBurger] = useState(false);

  //Initialization sub menu
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
      document.querySelector('#root').style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [burger]);

  const subMenu = burger ? (
    <div className="burgerMenuActive">
      <div className="burgerBackground">
        <div className="burgerContent">
          <div className="navigation">
            <h2>Меню</h2>
            <NavLink to="/"  onClick={() => setBurger(!burger)}>
              Хом
            </NavLink>
            <NavLink to="/about" onClick={() => setBurger(!burger)}>
              Обо мне
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setBurger(!burger)}>
              Портфолио
            </NavLink>
            <NavLink to="/blog" onClick={() => setBurger(!burger)}>
              Блог
            </NavLink>
            <a href="/" className="email">
              maksnikulshin2@gmail.com
            </a>
          </div>
          <div className="socialDesktop">
            <h2>Контакты</h2>
            <a href="/" className="instagram">
              Instagram
            </a>
            <a href="/" className="telegram">
              Telegram
            </a>
            <a href="/" className="git">
              GitHub
            </a>
            <a href="/" className="lin">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={() => setBurger(!burger)}></div>
    </div>
  ) : null;

  return (
    <header>
      <nav>
        <NavLink className="homeLink" to="/" onClick={() => !burger(false)}>
          хом
        </NavLink>
        <div className={`${burger ? 'burgerActive' : 'burger'}`} onClick={() => setBurger(!burger)}>
          <span></span>
          <span></span>
        </div>
        {subMenu}
      </nav>
    </header>
  );
}
