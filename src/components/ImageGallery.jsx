import React from 'react'

const ImageGallery = ({images}) => {
    console.log(images);
  return (
    
    <div>
        {
            images.map((img,key) => {
                return <img src={img}/>
            })
        }
    </div>
  )
}

export default ImageGallery