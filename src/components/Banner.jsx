// Navigation.jsx
import React from 'react';

function Banner(props) {

  return (
    <div className='banner' style={{backgroundImage:`url(${props.banner}`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
  )
}

export default Banner;
