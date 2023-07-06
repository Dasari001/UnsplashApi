// import React from 'react'

// const ImageList = ({Images}) => {
//   return (
//     <div>
//         {
//             Images.map((image)=>(
//               <img src={image.urls.small} alt={image.alt_description} />
//             ))
//         }      
//     </div>
//   )
// }

// export default ImageList;



////////////////////////////////////////////////////////


import React from 'react'

const ImageList = ({images}) => {
  return (
    <div>
       {
        images.map((pic)=>(
          <img src={pic.urls.small} alt="Loading Image" />
        ))
       }
    </div>
  )
}

export default ImageList





























