// SearchInput.jsx
import React from 'react';

/* simple component to render search input field */
function SearchInput(props) {
  return (
    <>
        <div className='searchbar-wrapper'>
            <div className='searchbar-container'>
                <input className='searchbar'
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
                <div className='searchtab'><p>Найти</p></div>
                <span className="material-symbols-outlined keyboard">keyboard</span>
            </div>
        </div>
    </>
  );
}

export default SearchInput;
