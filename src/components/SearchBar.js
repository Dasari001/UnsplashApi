import React, { useEffect, useState } from 'react'
import axios from 'axios';



const SearchBar = ({addImages}) => {

  let[searchterm,setSearchterm] = useState("");

  useEffect(()=>{
    handleSearch()
    console.log('lop')
  },[])


  function handleSearch() {
    axios.get("https://api.unsplash.com/search/photos",{
        params:{
            client_id: process.env.REACT_APP_UNSPLASH_KEY,
            query: searchterm,
        },
    })
    .then(res=>addImages(res.data.results))
    .catch(err=>console.log(err))
  }




  return (
    <div>
        <input type="text" placeholder="Search Images" 
        onChange={(e)=>setSearchterm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;







// https://api.unsplash.com/

// search/photos

// query Search terms.

// Authorization: Client-ID YOUR_ACCESS_KEY


// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY








