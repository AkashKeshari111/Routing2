import { Box, Grid } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

    const {isAuth,logout}=useContext(AuthContext);

    const navigate=useNavigate();
    const handleClickLogin=()=>{
       
        if(isAuth){
            logout()
        }
        else{
           
            navigate("/Login")
        }
           
        
    }

  return (
    <Box bg='lightblue' w='100%' p={5} color='white' >

        <Grid templateColumns='repeat(4,25%)' gap={6}>
        <Link to="/" >Home</Link>
        <Link to="/Careers" >Careers</Link>
        <Link to="/Feeds" >Feeds</Link>
        <button onClick={handleClickLogin}>{isAuth?"Logout":"Login"}</button>
       </Grid>
     
  </Box>
  
  )
}

export default Navbar