import React from 'react';
import { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Register() {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err, setError] = useState(null);


  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{  
      const res = await axios.post("auth/register", inputs);
    }catch(err){
        setError(err.response.data);
      }
    }
  
  

  return ( 
        <div className='Register'>
            <pan className="RegisterTitle">Registro</pan>
            <form className='RegisterForm'>
                <label>Usuario</label>
                <input type="text" className='RegisterInput' name='username' onChange={handleChange} placeholder='Username'/>
                <label>Email</label>
                <input type="email" className='RegisterInput' name='email' onChange={handleChange} placeholder='Email'/>
                <label>Senha</label>
                <input type="password" className='RegisterInput' name='password' onChange={handleChange} placeholder='Senha'/>
                <button className="RegisterButton" onClick={handleSubmit}>Registra-se</button>
                {
                  err && <p>{err}</p>
                }
            </form>
            <Link to='/login' className='loginRegister'>LOGIN</Link>
        </div>
  )
}
