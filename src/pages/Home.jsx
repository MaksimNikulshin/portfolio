//Import img

import creddyMobile from "../assets/img/creddyMobile.png";
import gori from "../assets/img/gori.png";
import reactHooks from "../assets/img/reactHooks.jpg";

//Import components

import MySlider from "../components/Slider";
import FavoritesSection from "../components/Favorites";

export default function Home() {
  const items = [
    { image: reactHooks, name: "Хуки в React", id: 1 },
    { image: creddyMobile, name: "gori", id: 2 },
    { image: gori, name: "горы", id: 3 },
    { image: gori, name: "горы", id: 3 },
    { image: gori, name: "горы", id: 3 },
    { image: gori, name: "горы", id: 3 },
  ];

  return (
    <>
      <section className="home-section">
        <div className="hi">
          <h1>Привет</h1>
          <h2>меня зовут Максим</h2>
        </div>
        <div className="aboutMe">
          <p>
            Я начинающий Frontend разработчик, с крепким фундаментом и
            стремлением учиться новому!
          </p>
        </div>
      </section>
      <FavoritesSection />
      <section className="blog">
        <h3>Блог</h3>
        <div className="posts">
          <MySlider items={items} horizontal={true} />
        </div>
      </section>
    </>
  );
}
