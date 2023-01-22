// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import TextForm from "./TextForm"
import About from './About';

import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('dark');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
      }
  }
  return (
    <div id='style1'>
    <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode} />
    <TextForm mode={mode}/> 
     <About/> 
    {/* <Hooks /> */}
    </div>
  );
}

export default App;
