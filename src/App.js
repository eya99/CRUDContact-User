import './App.css';

import ListUser from './pages/ListUser'
import ListContact from './pages/ListContact'

import Navbar from './shared/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>

    <Routes>


   <Route path='/' exact  element={<ListUser/>}  />
   <Route path='/contact' element={<ListContact/>} />
    

    </Routes>
    </Router>

    </>
  );
}

export default App;
