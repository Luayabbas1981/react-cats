
import React,{useEffect} from 'react';
import "./App.css"
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Cats from './Components/Cats';



function App() {
useEffect(()=>{
  document.body.style.backgroundColor="#fff1f7"
},[])

  return (
    <div className="App">
      <h2>My Cats</h2>


        <Router>
          <Routes>
          <Route path={'/'} element={<Cats/>}/>
          <Route path={'/react-cats'} element={<Cats/>}/>
          <Route path={'/cats'} element={<Cats/>}/>
          <Route path={'/cats/:catinfo'} element={<Cats/> }/>
          </Routes>
        </Router>

    </div>
  );
}


export default App;