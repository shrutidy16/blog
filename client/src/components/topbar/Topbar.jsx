import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
    <div className='topleft'>
    <i className="topIcon fa-brands fa-square-facebook"></i>
    <i className="topIcon fa-brands fa-twitter"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-instagram"></i>
    </div>
    <div className='topCenter'>
    <ul className='topList'>
        <li className='topListItem'>
        <Link className='link' to="/" >HOME</Link></li>
        <li className='topListItem'><Link className='link' to="/" >ABOUT</Link></li>
        <li className='topListItem'><Link className='link' to="/" >CONTACT</Link></li>
        <li className='topListItem'><Link className='link' to="/write" >WRITE</Link></li>
        <li className='topListItem'>
        {user && "LOGOUT"}</li>

    </ul>
    </div>
    <div className='topRight'>
    {user ?(
      <img
    className='image'
     src="https://i5.walmartimages.com/asr/a97080b5-3499-472b-8c40-0c2762f0e948_1.0375595ce09259d30e2c0dab8f76ab2d.jpeg" 
     alt='myphoto'/>
    ): (
      <ul className='topList'>
      <li className='topListItem'>
      <Link className='link' to="/login" >
      LOGIN
      </Link>
      </li>
      
      <li className='topListItem'>
      <Link className='link' to="/register" >
        REGISTER
        </Link>
      </li>

       
        </ul> )}
    
    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>    </div>


    </div>
  )
}
