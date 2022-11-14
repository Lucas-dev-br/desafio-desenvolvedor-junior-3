import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return ( 
        <div className='login'>
            <pan className="loginTitle">LOGIN</pan>
            <form action="" className='loginForm'>
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Email'/>
                <label>Senha</label>
                <input type="password" className='loginInput' placeholder='Senha'/>
                <button className="loginButton">LOGIN</button>
            </form>
            <Link to='/register' className='registerLoginButton'>REGISTRE-SE</Link>
        </div>
  )
}
