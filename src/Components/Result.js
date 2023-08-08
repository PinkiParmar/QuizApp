import { Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
// import Avatar from '@mui/joy/Avatar';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import {Button,Link} from '@mui/material';
export default function Result(){
    const paperStyle={padding:20,height:'50vh',width:280,margin:'20px auto' }
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0'}
    const rstStyle={height:'10vh',width:'10vh'}
    
    return(<>
    <form >
 <Grid align='center'>
   <div className='container'>
        <Grid align='center'>
           {/* <Avatar style={avatarStyle}><HttpsOutlinedIcon/></Avatar> */}
           <SentimentSatisfiedAltIcon style={rstStyle}/>
           
        </Grid>
         
        
       
        <h1>View result</h1>
            <p >Thank You! for submit exam.</p><br/>
            <p >Your response has been submitted successfully. </p>

        <Link href='/veiw_result'><Button  color='success' variant='contained' style={btnStyle} >View Score</Button></Link>

<p><Link href='/'>Submit another response.</Link></p>
            </div>
   
   
 </Grid>
 </form>
  </>)
}
    