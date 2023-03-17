//Import css

import '../assets/styles/footer.scss'

//Import svg

import instagram from '../assets/svg/inst.svg'
import telegram from '../assets/svg/telegram.svg'
import git from '../assets/svg/git.svg'
import lin from '../assets/svg/lin.svg'

export default function Footer() {
  return (
    <footer>
      <section>
      <div className='about'>
      <div className='idea'>
      <h1>Есть идея?</h1>
      <a href="" className='writeMe'>Напиши мне</a>
      </div>
      <a href="" className='mail'>maksnikulshin2@gmail.com</a>
      </div>
      <div className='socialMobile'>
        <a href="" className='instagram'><img src={instagram} alt="" /></a>
        <a href="" className='telegram'><img src={telegram} alt="" /></a>
        <a href="" className='git'><img  src={git} alt="" /></a>
        <a href="" className='lin'><img src={lin} alt="" /></a>
      </div>
      <div className='socialDesktop'>
        <h2>Соц сети</h2>
        <a href="" className='instagram'>Instagram</a>
        <a href="" className='telegram'>Telegram</a>
        <a href="" className='git'>GitHub</a>
        <a href="" className='lin'>LinkedIn</a>
      </div>
      </section>
    </footer>
  )
}
