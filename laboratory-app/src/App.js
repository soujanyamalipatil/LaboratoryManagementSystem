import { useState } from 'react';
import './App.css';
import AdminHomePage from './components/AdminHomePage';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  const [adminLogin, setadminLogin] = useState(false);
  const [error, seterror] = useState()
  const isLoginData=localStorage.getItem("isAuth");
 
  
  // const loginauth=localStorage.getItem('token')
  return (
    <Router>
      <div className="App">
       
    {/* <RegisterPage/> */}
     {/* <AdminHomePage setadminLogin={setadminLogin} /> */}
      
      {adminLogin||isLoginData?<AdminHomePage setadminLogin={setadminLogin} />:
      <Route path="/"><AdminLogin setadminLogin={setadminLogin} 
      seterror={seterror} error={error}/></Route>} 
     
{/* <HaemotologyReport/> */}
{/* <SampleDetails/> */}
{/* <SampleReportDetails/> */}
    </div>
    </Router>
  );
}

export default App;
