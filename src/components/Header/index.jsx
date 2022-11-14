import React from 'react'
import './header.css'
import homeImg from '../../assets/homeImg.jpg'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={homeImg} alt="" />
    </div>
  )
}
