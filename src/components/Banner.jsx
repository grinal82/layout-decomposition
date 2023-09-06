// Banner.jsx
import React from 'react';


/* re-usable component for banners, images that displays the image
it recieves in the props by setting this image as inline style 'background-image'.
*/
function Banner(props) {

  return (
    <div className='banner' style={{backgroundImage:`url(${props.banner}`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
  )
}

export default Banner;
