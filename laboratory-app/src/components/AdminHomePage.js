import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import RegisterPage from './RegisterPage';
import SampleReportDetails from './SampleReportDetails';
import UserDetails from './UserDetails';

function AdminHomePage({setadminLogin}) {
  return (
  <Router>
    <div >
        
       <Navbar bg='primary' expand="lg" sticky='top'  >
  <Container fluid>
    <Navbar.Brand href="#">Laboratory</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 bg-transferent"
        style={{ maxHeight: '100px' ,gap:'2em'}}
        navbarScroll
      >
        <Link to="/sampledetails" style={{textDecoration:'none',color:'black'}} >Sample Details</Link>
        <Link to="/userdetails"style={{textDecoration:'none',color:'black'}}>UserDetails</Link>
        <Link to="/register" style={{textDecoration:'none',color:'black'}}>Register</Link>
        
        <Link to="/" style={{textDecoration:'none',color:'black'}} onClick={()=>{setadminLogin(false)
        localStorage.clear()}}>LogOut</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
          <Route exact={true} path="/sampledetails" component={ SampleReportDetails} />
          <Route exact path="/userdetails" component={UserDetails} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/logout" />
          
          
          
        </div>
    </div>
    </Router>
  )
}

export default AdminHomePage