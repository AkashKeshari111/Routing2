import React, { useState } from 'react'
import { createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    
 
    const [isAuth,setIsAuth]=useState(false)

    const navigate=useNavigate();
    const {state}=useLocation();
    console.log(state)

    const login=(e)=>{
        e.preventDefault()
        setIsAuth(true)
        console.log(true)

        if(state){
            navigate(state.from,{replace:true})
        }
      
        else{
            navigate("/")
        }
        
    }
    
    const logout=()=>{
        setIsAuth(false)
        navigate("/")

    }

    return <AuthContext.Provider  value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}