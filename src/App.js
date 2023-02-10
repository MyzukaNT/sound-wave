import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Main } from './Components/screens/Main/Main';
import { Discover } from './Components/screens/Discover/Discover';
import Join from './Components/screens/Join/Join';
import { Error } from './Components/screens/Errors/Error';


function App() {
  return (
    <>
    <Router>

    <NaviBar />

    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/discover" element={<Discover/>} />
      <Route path="/join" element={<Join/>} />
      <Route path="*" element={<Error/>} />
    </Routes>


    </Router>
    </>
  );
}

export default App;
