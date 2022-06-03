import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {

    const {login}=useContext(AuthContext);

    const [Data,setData]=useState([])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...Data,
            [name]:value
        })
}

  
  return (
    <form onSubmit={login}>

        
        <br/><br/>
         <input type="text" placeholder='enter your name...' name="username" value={Data.name} onChange={handleChange} />
         <br/><br/>
         <input type="password" placeholder='enter your password' name="password" value={Data.password} onChange={handleChange}/>
         <br/><br/>
         <button type="submit" >Login</button>
         <br/><br/>
    </form>
  )
}

export default Login