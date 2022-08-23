
import React from 'react';
import "./App.css"
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Cats from './Components/Cats';



function App() {
  return (
    <div className="App">
      <h1>My Cats</h1>


        <Router>
          <Routes>
          <Route path={'/' } element={<Cats/>}/>
          <Route path={'/cats' } element={<Cats/>}/>
          <Route path={'/cats/:catinfo'} element={<Cats/> }/>
          </Routes>
        </Router>

    </div>
  );
}


export default App;