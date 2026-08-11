import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [scroll,setScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScroll(true);
      }else{
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  return (
    
    <header className={`fixed p-2 top-0 left-0 w-full z-50 bg-black duration-300  sticky top-0`}>
            <div className='w-full max-w-7xl mx-auto flex items-center justify-between gap-3 h-16'>
        <div className='text-2xl font-bold text-white'>Ram <span className='text-purple-600'>lala kumar</span></div>

        
        <nav className='hidden md:flex gap-5'>
          <NavLink to="/" className={({ isActive }) => `text-1xl text-white font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-1xl text-white font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>About</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `text-1xl text-white font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `text-1xl text-white font-semibold px-2 py-2 ${isActive ? "text-blue-600 underline underline-offset-7 decoration-red-700" : ""}`}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-1xl text-white font-semibold px-2 py-2 ${isActive ? "text-blue-600 underline underline-offset-7 decoration-red-700" : ""}`}>Contact</NavLink>
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className='text-white' /> : <FiMenu className='text-white'/>}
        </button>      </div>

      {
        menuOpen && (
          <div className="md:hidden bg-white text-black flex flex-col items-center gap-5 py-5">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
        )
      }
    </header>
  )
}

export default Header
