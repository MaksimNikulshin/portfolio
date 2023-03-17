import React, { useEffect, useRef } from 'react';

import creddyMobile from "../assets/img/creddyMobile.png";
import creddyDesktop from "../assets/img/creddyDesktop.png";
import kraiDesktop from "../assets/img/kraiDesktop.png";

import '../assets/styles/favorites.scss';

export default function Favorites() {

  return (
    <section className="favoritesProject">
    <h2 className="favorites">Избранное</h2>
    <div className="projects">
      <div className="project">
        <a href="/portfolio">
          <img className="mobileImg" src={creddyMobile} alt="" />
          <img className="desktopImg" src={creddyDesktop} alt="" />
        </a>
        <div className="descriptionProject">
          <h3>KRAI</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
      </div>
      <div className="project">
        <a href="/portfolio">
          <img className="mobileImg" src={creddyMobile} alt="" />
          <img className="desktopImg" src={creddyDesktop} alt="" />
        </a>
        <div className="descriptionProject">
          <h3>KRAI</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
      </div>
      <div className="project">
        <a href="/portfolio">
          <img className="mobileImg" src={creddyMobile} alt="" />
          <img className="desktopImg" src={creddyDesktop} alt="" />
        </a>
        <div className="descriptionProject">
          <h3>KRAI</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
      </div>
      <div className="project">
        <a href="/portfolio">
          <img className="mobileImg" src={creddyMobile} alt="" />
          <img className="desktopImg" src={creddyDesktop} alt="" />
        </a>
        <div className="descriptionProject">
          <h3>KRAI</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
            eiusmod tempor...
          </p>
        </div>
      </div>
    </div>
    <div className="btn">
      <button>Портфолио</button>
    </div>
  </section>
  );
}
