import { Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FormGroup from '@mui/material/FormGroup';
import {Button,Link} from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ExamDetail(){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const paperStyle={padding:20,height:'45vh',width:400,margin:'20px auto' }

    const btnStyle={margin:'8px 0'}
    const addStyle={height:'100',width:'100'}
    const marginTop={marginTop:5}

    return(<>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <form >
    <Paper elevation={10} style={paperStyle}>
        <h4>Total no. of participants:</h4>
        <h4>Average marks:</h4>
        <h4>Difficulti Level:</h4>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h4>Total No. of Participants</h4></TableCell>
            <TableCell align="right"><h4>Average Marks</h4></TableCell>
            <TableCell align="right"><h4>Difficulti Level</h4></TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>2000</TableCell>
            <TableCell align="right">8</TableCell>
            <TableCell align="right">easy</TableCell>
            
          </TableRow>
          
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
    <Button  color='primary' variant='contained' style={btnStyle} onClick={handleClose}  >Ok</Button>

    </Paper>
 </form>
      </Modal>
    <form >
    
 <Grid>
 
        <Grid align='center'>
           <SupervisorAccountIcon style={addStyle}/>
             <h2>MyExam</h2>
           
        </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Grid >
        <Button color='success' variant='contained' style={btnStyle} onClick={handleOpen} >View Participants</Button>

        </Grid>
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        
        <select>
        <option  value="">Answer</option>
        <option  value=""  ><b>A</b></option>
                              
        </select>
                       
              
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="container1">
        <Grid>
            <Grid>
        <p > <h4>Question no.1</h4>What is the full form of HTML.</p>
        </Grid>
        <FormControl style={marginTop}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="option" style={{display:'initial'}} >
        <FormControlLabel value="option1" control={<Radio />} label="Hyper text markup language." />
        <FormControlLabel value="option2" control={<Radio />} label="High level markup language." />
        <FormControlLabel value="option3" control={<Radio />} label="High  level language." />
        <FormControlLabel value="option4" control={<Radio />} label="None of these."/>
      </RadioGroup>
    </FormControl>
        
        
        </Grid>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <FormGroup>
  {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}
</FormGroup>

    
 </Grid>
 </form>
  </>)
}
   