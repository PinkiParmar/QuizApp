import { Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
// import Avatar from '@mui/joy/Avatar';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import {Button,Link} from '@mui/material';
export default function SignIn(){
    const paperStyle={padding:20,height:'50vh',width:280,margin:'20px auto' }
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0'}
    
    return(<>
    <form >
 <Grid>
    <Paper elevation={10} style={paperStyle}>
         
        <Grid align='center'>
           {/* <Avatar style={avatarStyle}><HttpsOutlinedIcon/></Avatar> */}
           <HttpsOutlinedIcon/>
             <h2>Sign In</h2>
        </Grid>
        <TextField name="email" label='email' placeholder='enter email' variant="filled" fullWidth  required/>
        <TextField name="password" label='password' placeholder='enter password' variant="filled" fullWidth  required/>
        <FormGroup>
  {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}
</FormGroup>
<Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Sign In</Button>
{/* <Typography>
    <Link href='/forget_password'>Forget Password</Link>
</Typography> */}
{/* <Typography>Do you have an account?
    <Link href='/sign_up'>Sign Up</Link>
</Typography> */}
    </Paper>
 </Grid>
 </form>
  </>)
}