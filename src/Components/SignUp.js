import React from 'react';

import { Paper, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
//import Avatar from '@mui/joy/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import {Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SignUp(){
    const paperStyle={padding:20,height:'70vh',width:300,margin:'20px auto'}
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0'}
    const headerStyle={margin:0}
    const marginTop={marginTop:5}

    
    return(<>
     <form>
 <Grid >
    <Paper elevation={10} style={paperStyle}>
        
        {/* <Avatar alt="Remy Sharp" src="" /> */}
        
        <Grid align='center'>
           
        {/* <Avatar style={avatarStyle}><AddCircleOutlineIcon/></Avatar>  */}
        <AddCircleOutlineIcon/>
             <h2 style={headerStyle}>Sign up</h2>
             <Typography variant='caption'>please fill this form to create an account!</Typography>
        </Grid>
       <FormGroup>
        <TextField name="name" fullWidth label="Name" variant='filled'  />
        <TextField name="email" fullWidth label="Email" variant="filled"  />
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="gender" style={{display:'initial'}} >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
        <TextField name="phone_no" fullWidth label="Phone No." variant="filled"  />
        <TextField name="password"  fullWidth label="Password" variant="filled"  />
        <FormControlLabel control={<Checkbox defaultChecked />} label="I  accept the terms and conditions" />
        <Button  type='submit' variant='contained' color='primary'>Sign Up</Button>
       </FormGroup>
    </Paper>
 </Grid>
 </form>
    </>)
}