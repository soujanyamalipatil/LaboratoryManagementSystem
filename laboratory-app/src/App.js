import { useState } from 'react';
import React from 'react'
import './App.css';
import AdminHomePage from './components/AdminHomePage';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [adminLogin, setadminLogin] = useState(false);
  const [error, seterror] = useState()
  const isLoginData=localStorage.getItem("isAuth");
 
  console.log("gds",localStorage.getItem("isAuth"));
  
  return (
    <Router>
      <div className="App">
       
      {localStorage.getItem("isAuth")?<Route ><AdminHomePage adminLogin={adminLogin} setadminLogin={setadminLogin} /></Route>:
      <Route path="/"><AdminLogin setadminLogin={setadminLogin} 
      seterror={seterror} error={error}/></Route>} 
     
    </div>
    </Router>
  );
}

export default React.memo(App);
