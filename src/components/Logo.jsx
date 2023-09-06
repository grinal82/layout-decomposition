// Logo.js
import React from 'react';

function Logo(props) {

  return (
  <img src={props.image} style={{width:"80px",height:"50px"}} alt={props.alt} className='logo' />
  )
}

export default Logo;
