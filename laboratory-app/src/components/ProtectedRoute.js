// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component,setadminLogin, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuth");
  console.log("this", isAuthenticated);
// if(isAuthenticated){
//     setadminLogin(true)
// }

  return <div>
      <Route
   
      {...restOfProps}
      render={(props) =>
        isAuthenticated ?  
        <Component {...props} /> : <Redirect to="/" />
      }
    />
  
  </div>;

}

export default ProtectedRoute;
