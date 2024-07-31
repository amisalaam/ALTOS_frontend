import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import PageNotFound from './components/PageNotFound';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {


  return (
    <Router>
      <Routes>

        <Route path="*" element={<PageNotFound/>} />

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
    </Router>

  )
}

export default App
