import React, { useEffect } from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';
import ProtectedRoute from './ProtectedRoute';
import RegisterPage from './RegisterPage';
import SampleReportDetails from './SampleReportDetails';
import UserDetails from './UserDetails';
import Home from './Home';

function AdminHomePage({setadminLogin,adminLogin}) {

  useEffect(()=>{
    if(localStorage.getItem("isAuth")) {
      setadminLogin(true)
    }
  },[adminLogin])
  
  return (
  <Router>
    <div >
        
       <Navbar bg='primary' expand="lg" sticky='top'  >
  <Container fluid>
    <Navbar.Brand href="/">Laboratory</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 bg-transferent"
        style={{ maxHeight: '100px' ,gap:'2em'}}
        navbarScroll
      >
        <Link className='link' to="/sampledetails" style={{textDecoration:'none',color:'black'}} >Sample Details</Link>
        <Link to="/userdetails"style={{textDecoration:'none',color:'black'}}>UserDetails</Link>
        <Link to="/register" style={{textDecoration:'none',color:'black'}}>Register</Link>
        
        <Link to="/" style={{textDecoration:'none',color:'black'}} onClick={()=>{localStorage.clear();
          setadminLogin(false)
        }}>LogOut</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>


  
          <ProtectedRoute setadminLogin={setadminLogin} exact={true} path="/sampledetails" component={ SampleReportDetails} />
          <ProtectedRoute exact path="/userdetails" component={UserDetails} />
          <ProtectedRoute exact path="/register" component={RegisterPage} />
          <Route path="/logout" />
          <Route exact path="/" component={Home}></Route>
          
          
        </div>
    </div>
    </Router>
  )
}

export default AdminHomePage