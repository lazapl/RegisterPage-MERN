import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Welcome from './components/Welcome'

function App() {
  // Initialize user state
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App