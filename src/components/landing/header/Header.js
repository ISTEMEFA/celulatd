import React from 'react'

import '../../../scss/components/landing/header/_header.scss';

import InputHero from './Input';

import logoVector from '../../../assets/img/LogoVector.svg';
import letrasVector from '../../../assets/img/Frase1Vector.svg';

import mail1 from '../../../assets/img/mail1.svg';
import calendar from '../../../assets/img/calendar.svg';
import drafts from '../../../assets/img/drafts.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';

import Button from './Button';

export default function Header() {
  return (

    <header className='header'>
      <InputHero />
      
      <div className='header-container__img1'>
      <img className='header-container__img1--img' src={logoVector} alt="logo academia" />
      </div>
      
      <div className='header-container__img2'>
      <img className='header-container__img2--img'  src={letrasVector} alt="logo academia" />
      </div>
      
      {/* <h1 className='header__h1'>DESAFIO</h1>
      <h2 className='header__h2'>latam_</h2> */}
      <div className='container-btn'>
      <Button/>
      </div>
      {/* <button className='header__btn'>  {'\{ENTRAR\}'}  </button> */}
      <nav className='header__nav'>
        <li className='header__nav--li'><a className='anchor' href='#card1'><img src={groups} /> <p>COMUNIDAD</p> </a>
        </li>
        <li className='header__nav--li'><a className='anchor' href='#'><img src={drafts} /><p>NEWSLETTER</p></a></li>
        <li className='header__nav--li'><a className='anchor' href='#'><img src={mail1} /><p>MAIL</p></a></li>
        <li className='header__nav--li'><a className='anchor' href='#calendario'><img src={calendar} /><p>AGENDA</p></a></li>
        <li className='header__nav--li'><a className='anchor' href='#experiencia'><img src={communication} /><p>EXPERIENCIA</p></a></li>
      </nav>

    </header>
  )
}
