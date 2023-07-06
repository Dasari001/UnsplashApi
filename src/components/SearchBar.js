// import React, { useState } from 'react'
// import axios from 'axios';
// import { queries } from '@testing-library/react';

// const SearchBar = ({addImages}) => {

//     let [searchTerm, setSearchTerm] = useState("");
//     // let [Images, setImages] = useState([])


//     function handleStatement() {
//         axios.get("https://api.unsplash.com/search/photos",{
//             params:{
//                 client_id: "qwlE5rfVf7VTIjUlFHnJxPKaiEn0IMSa8TR1o2ZWppY",
//                 query: searchTerm
//             }
//         }).then(response=>addImages(response.data.results))
//         .catch(error=>console.log(error))
//     }

//   return (
//     <div>
//         <input type="text" placeholder='Search for Images'
//         onChange={(e)=>setSearchTerm(e.target.value)}/>
//         <button onClick={handleStatement}>Search</button>
//     </div>
//   )
// }

// export default SearchBar;



//////////////////////////////////////////////////////



import React, { useState } from 'react'
import axios from 'axios';



const SearchBar = ({addImages}) => {

  let[searchterm,setSearchterm] = useState("");
  

  function handleSearch() {
    axios.get("https://api.unsplash.com/search/photos",{
        params:{
            client_id: 'qwlE5rfVf7VTIjUlFHnJxPKaiEn0IMSa8TR1o2ZWppY',
            query: searchterm
        }
    })
    .then(res=>addImages(res.data.results))
  }




  return (
    <div>
        <input type="text" placeholder="Search" 
        onChange={(e)=>setSearchterm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;





// qwlE5rfVf7VTIjUlFHnJxPKaiEn0IMSa8TR1o2ZWppY

// https://api.unsplash.com/

// search/photos

// query Search terms.

// Authorization: Client-ID YOUR_ACCESS_KEY


// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY








