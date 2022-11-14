import React from 'react'
import './write.css'
export default function Write() {
  return (
    <div className='write'>
    <img className='writeImg' src="" alt=''/>
    <form className='writeForm'>
        <div className='writeFormGroup'>
        <label htmlFor='fileInput'>
        <i className="writeIcon fa-solid fa-upload"></i>
        </label>
            <input type='file' id='fileInput' style={{display:'none'}}/>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
            <textarea placeholder='Tell your Story...'
             type='text' className='writeInput writeText'>

             </textarea>
             <button className='writeSubmit'>Publish</button>
        </div>
    </form>
    </div>
  )
}
