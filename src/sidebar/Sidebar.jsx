import React from 'react'
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>ABOUT ME</span>
    <img className='sidebarImg' src="https://cdn.weasyl.com/~tateshaw/submissions/1277059/5f50defa4132b22d1855f9c2bbf0f3520dc3542ac4ba7f00223b63c2f4e3b88a/tateshaw-totoro.png"
     alt=""/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </p>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>CATEGORIES</span>
    <ul>
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
        <li className='sidebarListItem'>Style</li>
        <li className='sidebarListItem'>Tech</li>
        <li className='sidebarListItem'>Sports</li>
        <li className='sidebarListItem'>Cinema</li>
    </ul>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>FOLLOW US</span>
    <div className='sidebarSocial'>
    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    <i className="sidebarIcon fa-brands fa-twitter"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-instagram"></i>
    </div>
    </div>
    </div>
  )
}
