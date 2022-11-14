import React from 'react'
import './topbar.css'
export default function Topbar() {
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
        <li className='topListItem'>HOME</li>
        <li className='topListItem'>ABOUT</li>
        <li className='topListItem'>CONTACT</li>
        <li className='topListItem'>WRITE</li>
        <li className='topListItem'>LOGOUT</li>

    </ul>
    </div>
    <div className='topRight'>
    <img
    className='image'
     src="https://i5.walmartimages.com/asr/a97080b5-3499-472b-8c40-0c2762f0e948_1.0375595ce09259d30e2c0dab8f76ab2d.jpeg" alt='myphoto'/>
    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>    </div>


    </div>
  )
}
