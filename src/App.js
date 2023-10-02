import React, { useState } from 'react';
//import './App.css'; // Import your CSS file for styling
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Main } from './pages/main/main.page.js';
import {Login} from "./pages/login.js"
import {Createpost} from "./pages/create-post/Createpost.js"
import {Navbar} from "./components/Navbar.js"
function App(){
  return (
    <div className="App">
       
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/createpost' element={<Createpost/>}/>
          </Routes>
        </Router>
    </div>
  );
  }

export default App;
