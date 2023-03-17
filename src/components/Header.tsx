import { useState } from "react";

function Header() {

  const [handelMenu, setHandelMenu] = useState(false)


  return (
    <div className="header">
      <div 
        className={`hamburger ${handelMenu && 'is-active'} `} 
        id="hamburger"
        onClick={() =>setHandelMenu(prev => !prev)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <h1 className="logo">reddit</h1>


      <a className="button" style={{marginLeft: "auto"}}>Log in</a>
      <a className="button button-fill">Register</a>
    </div>
  )
}

export default Header;
