import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navebar = () => {
  return (
    <>
    <nav className="body navbar bg-body-tertiars" >
  <div className="container-fluid">
    <p className="navbar-brand">Myshop</p>
    <div>
    <span style={{color:"white",margin:"0px 20px"}}>home</span>
    <span style={{color:"white",margin:"0px 20px"}}>mens fashion</span>
    <span style={{color:"white",margin:"0px 20px"}}>girl fashion</span>
    <span style={{color:"white",margin:"0px 20px"}}>footwear</span>
    <span style={{color:"white",margin:"0px 20px"}}>electricals</span></div>
    <form className="d-flex" role="search">
      <Link to='Cart' className='cart'>Cart</Link>
      
    </form>
  </div>
</nav>

    </>
  )
}

export default Navebar
