import React from 'react'
import { Link } from 'react-router-dom';


import '../../../scss/components/landing/header/_button.scss'

export default function Button() {
  return (
    <div className='btn'>
      <Link to="/login" className='Link'>
      <button className='btn'   >    
        {'\{ENTRAR\}'}
        </button>    
        </Link> 
    </div>
  )
}
