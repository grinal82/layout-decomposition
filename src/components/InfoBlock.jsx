// InfoBlock.jsx
import React from 'react';

function InfoBlock(props) {
  return (
    <div className='infoblock-wrapper'>
      {props.cardsData.map((item, index)=>(
        <div className="card" key={index} style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{item.cardTitle}</h5>
          <p className="card-text">{item.cardContent}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>))}
      
    </div>
  )
}

export default InfoBlock;
