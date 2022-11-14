import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
    <div className='settingsTitle'>
        <span className='settingsUpdateTitle'>Update Your Account</span>
        <span className='settingsDeleteTitle'>Delete Your Account</span>
    </div>
    <form className='settingsForm'>
        <label>Profile Picture</label>
        <div className="settingsPP">
            <img
              src="https://i5.walmartimages.com/asr/a97080b5-3499-472b-8c40-0c2762f0e948_1.0375595ce09259d30e2c0dab8f76ab2d.jpeg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Shruti" name="name" />
          <label>Email</label>
          <input type="email" placeholder="shruti@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
    </form>
    </div>
    <Sidebar/>
    </div>
  )
}
