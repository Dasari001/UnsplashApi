import React from 'react'

const ImageList = ({images}) => {
  return (
    <div className='Imagelist'>
       {
        images.map((pic)=>(
          <img src={pic.urls.small} alt="Loading Image" />
        ))
       }
    </div>
  )
}

export default ImageList





























