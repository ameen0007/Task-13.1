import React, { useState} from 'react'
import { useEffect } from 'react'
import  axios from "axios";
import { Searchinput } from './Searchinput/Searchinput'
import { Searchlist } from './Searchlist/Searchlist'
import './Search.css'

export const Search = () => {
  const [userInputValue,setUserInputValue] = useState("")
  const [movieData,setMovieData] = useState([]);
  const [filterData,setFilterData] = useState([]);


   const handlechange = (event)=>{
    setUserInputValue(event.target.value)

   const filtermovie = movieData.filter((data)=>{
      if (data.title){
        return data.title.toLowerCase().includes(event.target.value.toLowerCase());
      }else{
        return data.name.toLowerCase().includes(event.target.value.toLowerCase());
      }
    })
    setFilterData(filtermovie)
 }
   
   const  fetchMovieList = async ()=>{
     const response = await axios ('http://localhost:4000/api/movies',{
   
     })
     console.log(response.data,"===inside");
    setMovieData(response.data)
    setFilterData(response.data)
   }
     
    useEffect(() => {
      fetchMovieList();
    }, [])
   
    const exit =()=>{
      setUserInputValue("")
      setFilterData([])
    }



  return (
   <div className='search-container'>
    <div className='heading-section'>
        <img src="src\assets\be6d6b251ca93335a4094e81d8497973.png" alt="" />
    </div>
        <Searchinput userInputValue={userInputValue} handlechange= {handlechange} exit={exit}/>
        <Searchlist  filterData={filterData}/>
   </div>
  )
}
