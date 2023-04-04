import React from 'react'
import { useEffect,useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Body() {
  const [data, setData] = useState([]);
  const [vendor,setVendon]=useState();
    async function getList1 ()  {
        let result = await fetch('https://cheddar-tan-bucket.glitch.me/vendorList',
        {
          method :'post'
        });
        result = await result.json();
        setData(result.message)
        
        console.log(result);
    }
    console.log("data", data[0]);
    
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <div>
      <div></div>
    <button onClick={getList1}>click</button>
    </div>
    <select  class="navItemBox" id='select1'  >
            <option value="Infocity Square" >Infocity Square</option>
            <option value="Trident Collage">Trident Collage</option>
            <option  value="Sai Enclave">Sai Enclave</option>
        </select>
    </div>
  )
}

export default Body
