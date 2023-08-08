import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Paper, TextField } from '@mui/material';


// import Avatar from '@mui/joy/Avatar';
import {Link} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AllQuiz() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

const tableData = [
  {
    id: 1,
    exam_name: 'HTML',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  {
    id: 2,
    exam_name: 'CSS',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  {
    id: 3,
    exam_name: 'Java Script',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  {
    id: 4,
    exam_name: 'Java',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  {
    id: 5,
    exam_name: 'C',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  {
    id: 6,
    exam_name: 'C++',
    exam_date:' 30 August 2023',
    no_of_questions: 10,
    passing_marks:7,
    each_question_marks:1
  },
  // Add more objects as needed
];
const btnStyle={margin:'8px 0'};
const paperStyle={padding:20,height:'50vh',width:280,margin:'20px auto' }
    


function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}


  return (
    <Box height='100'>
    <div>
        <Typography variant="h6" noWrap component="div">
        <Button type='submit' color='primary' variant='contained' style={btnStyle} onClick={handleOpen}><AddIcon/></Button>
          </Typography>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Quiz
          </Typography>
          <form >
 
    <Paper elevation={10} style={paperStyle}>
        <TextField name="Exam Name" label='Quiz Title' placeholder='Quiz Title' variant="filled" fullWidth  required/>
        <TextField name="Exam Date" label='Quiz date' placeholder='Quiz Date' variant="filled" fullWidth  required/>
        <TextField name="No Of Questions" label='No Of Questions' placeholder='No Of Questions' variant="filled" fullWidth  required/>
        <TextField name="Passing Marks" label='Passing Marks' placeholder='Passing Marks' variant="filled" fullWidth  required/>
        <TextField name="Each Question Marks" label='Each Question Marks' placeholder='Each Question Marks' variant="filled" fullWidth  required/>
<Button type='next' color='primary' variant='contained' style={btnStyle} >Next</Button>&nbsp;&nbsp;&nbsp;&nbsp;
<Button type='cancel' color='error' variant='contained' style={btnStyle} onClick={handleClose} >Cancel</Button>

    </Paper>
 </form>
        </Box>
      </Modal>
     
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Exam name</TableCell>
            <TableCell>Exam date</TableCell>
            <TableCell>No of questions</TableCell>
            <TableCell>Passing marks</TableCell>
            <TableCell>Each questions marks</TableCell>
            <TableCell>Add questions</TableCell>
            <TableCell>Exam Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.exam_name}</TableCell>
              <TableCell>{row.exam_date}</TableCell>
              <TableCell>{row.no_of_questions}</TableCell>
              <TableCell>{row.passing_marks}</TableCell>
              <TableCell>{row.each_question_marks}</TableCell>
              <TableCell>
              <Link href="/add_question" ><Button  variant="contained" >Add Questions</Button></Link></TableCell>
              <TableCell>
              <Link href="/exam_detail" ><Button color='success' variant="contained" >Exam Detail</Button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Box>

  );
}

