import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Personal from './pages/Personal'
import Business from './pages/Business'
import Company from './pages/Company'
import Help from './pages/Help'
import NavBar from './components/NavBar'



const App = () => {
  return (
     <Router>
     <NavBar />
     <Routes>
         <Route path="/" element={<Personal />}></Route>
         <Route path="/" element={<Business />}></Route>
         <Route path="/" element={<Company />}></Route>
        <Route path="/" element={<Help />}></Route>
     </Routes>
     </Router>
  )
}

export default App