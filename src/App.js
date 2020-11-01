import React from 'react';
import './App.css';
import LoginForm from './loginForm/loginForm'
import LoginFormFormik from './loginFormFormik/loginFormFormik'

function App() {
  return ( 
    <div className='app-wrapper'>
      <LoginForm/>
      <LoginFormFormik/>
    </div>
    
   );
}

export default App;
