import React from 'react';
import {BrowserRouter as Router , Link , Route,Routes} from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import './Main.css'
import Logout from './Logout.js';
function Main() {
  return (
    
      <div className='style-main'>
       
      
      <Router>
      <Link to="/register">Register </Link>
      <Link to="/login"> </Link>
      <Link to="/logout"></Link>
      
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}
export default Main;
