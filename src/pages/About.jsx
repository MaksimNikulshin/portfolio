import "../assets/styles/about.scss";

import hi from "../assets/svg/hi.svg";

export default function About() {
  return (
    <>
    <section className="aboutMePage">
    <div className="description">
    <img src={hi} alt="" />
    <h1>меня зовут Mаксим, мне 18 лет, я креативный Frontend разработчик</h1>
    </div>
    <p>Я всегда готов обучаться новым технологиям, чтобы создавать высококачественные продукты для моих клиентов)</p>
    </section>
    </>
  )
}
