import React from 'react';


/* 
news block which renderes the news by 'mapping' through the props it receives and wrapping them down into a container.
*/
function NewsBlock (props) {
  return (
    <section className='news container'>
      
      {props.data.map((item, index)=>(
        <div key={index} className='news-item'>
          <span className="material-symbols-outlined globe">globe_uk</span>
          <a href={item.newsLink}><p>{item.newsText}</p></a>
          </div>
      ))}
      
    </section>
  );
}

export default NewsBlock;
