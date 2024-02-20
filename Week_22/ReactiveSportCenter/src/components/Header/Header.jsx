import React from 'react'
import Navbar from './Navbar'
import Home from './Home'

const Header = () => {
  return (
    <header className="home-header">
        <Navbar />
        <Home />
    </header>
  )
}

export default Header;