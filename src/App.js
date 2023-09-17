
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Button, Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import EmployeeList from './employeeList';
import Home from './Home.js';
import HireEmployee from './hireEmployee';

function App() {


  let [employee] = useState(data);



  return (

    

    <BrowserRouter>
    
    
  
    <div className="App">
   

  
  
  <Navbar bg="light" variant="light">

    <Navbar.Brand href="/"><h4 style={{color:'gray'}}>무한상사</h4></Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#features">사원 등록</Nav.Link>
      <Nav.Link href="/employeeList">사원 목록 조회</Nav.Link>
      <Nav.Link href="/hireEmployee">채용 공고</Nav.Link>
    </Nav>
   
  </Navbar>
  

  <Routes>
    <Route path='/' element={
      
     
     <Home></Home>
 
       
    }/>


    <Route path='/employeeList' element={
      <EmployeeList employee={employee}></EmployeeList>
    } />


<Route path='/hireEmployee' element={
      <HireEmployee/>
    } />




  </Routes>


    </div>
  </BrowserRouter>
   
   
  );
}

export default App;
