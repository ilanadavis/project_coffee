import React from 'react';


function Header(props) {
  return (
   <header className="top">
    <h1>People Action Form</h1>
    <h3>Select Action</h3>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
  )
  
}

export default Header;