import React from 'react';
import './App.css';
import InputSearch from './inputSearch/inputSearch';
import ReadRandomNumber from './randomRead/randomRead'
import List from './toDoList/toDoList'
import LoginForm from './loginForm/loginForm'

function App() {
  return ( 
    <div className='app-wrapper'>
      {/* <InputSearch/>
      <ReadRandomNumber/> */}
      {/* <List/> */}
      <LoginForm/>
    </div>
    
   );
}

export default App;
