import { Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import {Button,Link} from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
export default function AdminPage(){
    const paperStyle={padding:20,height:'50vh',width:280,margin:'20px auto'};
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0'}
    const logoStyle={height:'20vh',width:'20vh'}
    return(<>
    <form >
 <Grid>
    <Paper elevation={10} style={paperStyle}>
         
        <Grid align='center'>
          
           
             <h2 >Quiz-App</h2>
             <ViewInArIcon style={logoStyle}/>
        </Grid>
        
       
<Link href='/add_quiz'><Button  color='success' variant='contained' style={btnStyle} fullWidth>Add Quiz</Button></Link>
<Grid>
    <select  >
       <option  value="" selected="selected">My Quiz</option>
       <option  value=""  ><b>&nbsp;&nbsp;Quiz 1</b></option>
       <option  value=""  > <b>&nbsp;&nbsp;Quiz 2</b></option>
       <option  value="" ><b>&nbsp;&nbsp;Quiz 3</b></option>
       </select>
</Grid>

    </Paper>
 </Grid>
 </form>
  </>)
}