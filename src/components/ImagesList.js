import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

  const imageList = props.images.map(item => {
    return <ImageCard key={item.id} image={item} />
  });

  return (
    <div className='image-list'>
      {imageList}
    </div>
  )
}
export default ImageList;
