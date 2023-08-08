import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import UserPage from './Components/UserPage';
import Quiz from './Components/Quiz';
import './App.css';
import AddQuestion from './Components/AddQuestion';
import Result from './Components/Result';
import AdminPage from './Components/AdminPage';
import Sidebar from './Common/Sidebar';
import AllQuiz from './Components/AllQuiz';
import ExamDetail from './Components/ExamDetail';
import ViewResult from './Components/ViewResult';

export default function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/sign_up" element={<SignUp/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/user_page" element={<UserPage/>}></Route>
    <Route path="/quiz" element={<Quiz/>}></Route>
    <Route path="/all_quiz" element={<AllQuiz/>}></Route>
    <Route path="/add_question" element={<AddQuestion/>}></Route>
    <Route path="/result" element={<Result/>}></Route>
    <Route path="/admin_page" element={<AdminPage/>}></Route>
    <Route path="/sidebar" element={<Sidebar componentLoad={AllQuiz}/>}></Route>
    <Route path='/exam_detail' element={<ExamDetail/>}></Route>
    <Route path="/veiw_result" element={<ViewResult/>}></Route>
  </Routes>
  </BrowserRouter>
  </>)
}