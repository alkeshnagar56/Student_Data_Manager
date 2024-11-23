import React from 'react'
import { NavLink } from 'react-router-dom'
import './compo.css'


const Nabvbar = () => {
  return (
    <>
    <nav className='Parnav'>
        <NavLink className="homenav" to='/'>Home</NavLink>
        <NavLink className="studentnav" to='/student'>Student</NavLink>
        <NavLink className="contactnav" to='/contact'>contact</NavLink>
    </nav>
    </>
  )
}

export default Nabvbar