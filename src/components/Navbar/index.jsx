import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
import perfil from '../../assets/perfil.jpg'

export default function Navbar() {
  
  const user = false;

  return (
    <div className='nav'>
        <div className='navLeft'>
          { user &&
            <img className='perfil' src={perfil} alt="" />
          }
          
        </div>
        <div className="navCenter">
          <ul className="navList">
            <li className='navListItem'><Link to='/' className='link'>HOME</Link></li>
            <li className='navListItem'> <Link to='/' className='link'>SOBRE</Link></li>
            <li className='navListItem'><Link to='/' className='link'>CONTATO</Link></li>
            <li className='navListItem'><Link to='/posts' className='link'>POSTAGEM</Link></li>
            {
              user ? (
                <li className='navListItem'><Link to='/login' className='link'>LOGOUT</Link></li>
              ) : (
                <li className='navListItem'><Link to='/register' className='link'>REGISTRI-SE</Link></li>
              )
            } 
          </ul>
        </div>
        <div className="navRight">
          <i className="top-icon fa-brands fa-facebook"></i>
          <i className="top-icon fa-brands fa-instagram"></i>
          <i className="top-icon fa-brands fa-whatsapp"></i>
        </div>
    </div>
  )
}
