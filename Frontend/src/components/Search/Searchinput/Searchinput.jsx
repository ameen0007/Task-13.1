import React from 'react'
import './Searchinput.css'
export const Searchinput = ({userInputValue,handlechange,exit}) => {
  return (
    <div className='search-input-container'>
       <img className= "img1" src="src\assets\icons8-search-50.png" alt="" />
       <input type="text" value={userInputValue} placeholder='Search your movie....'onChange={handlechange} />
       {userInputValue && <button onClick={exit}>
       <img className= "img2" src="src\assets\icons8-x-30.png" alt="" />
       </button>}
       
      </div>
  )
}
