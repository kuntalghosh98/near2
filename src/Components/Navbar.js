import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import './Nav.css'
import { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';






function Navbar() {
  const [x,setX]=useState()

    
//---------------------------------------------
    const [data, setData] = useState([]);
    async function getList1 ()  {
        let result = await fetch('https://cheddar-tan-bucket.glitch.me/vendorList',
        {
          method :'post'
        });
        result = await result.json();
        setData(result)

    }

    //---------------------------------------------------------------

    function getList(event) {
    let x=event.target.value
      console.log("selected",x);
      
    }
    //----------------------------------------------------------------
    console.log("data", data);

  return (

<div class="navDiv">
    
    <Box class="navColor">
        <Box class="navItemBox1">Our Logo</Box>
        
        <select  class="navItemBox" id='select1' onChange={getList}  >
            <option value="Infocity Square" >Infocity Square</option>
            <option value="Trident Collage">Trident Collage</option>
            <option  value="Sai Enclave">Sai Enclave</option>
        </select>



            
        <Box class="navItemBox3">Login</Box>
    </Box>
    <button onClick={getList}>click</button>
</div>
  

  )
}

export default Navbar
