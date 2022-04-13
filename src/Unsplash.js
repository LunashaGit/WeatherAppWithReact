import React from 'react';


const unsplash = ({api}) => {
    return(
  <div className='Unsplash'>
    <img className='ImageUnsplash' src={api.results[0].urls.full} alt={api.alt_description}></img>
  </div>
)}

export default unsplash;