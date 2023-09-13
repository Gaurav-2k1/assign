import React from 'react'
import Navbarcom from './components/Navbar'
import "./App.css"
import Hero from './components/Hero'
<script src="
https://cdn.jsdelivr.net/npm/react-bootstrap@2.8.0/dist/react-bootstrap.min.js
"></script>
const App = () => {
  return (
    <div className='d-flex flex-column'>
      <Navbarcom />
      <Hero />
    </div>
  )
}

export default App