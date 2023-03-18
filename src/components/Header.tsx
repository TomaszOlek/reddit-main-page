
interface HeaderType {
  menuOpen: boolean
  handleMenuToggle: () => void;
}

function Header( {menuOpen, handleMenuToggle}:HeaderType ){

  return (
    <div className="header">
      <div 
        className={`hamburger ${menuOpen && 'is-active'} `} 
        id="hamburger"
        onClick={() => handleMenuToggle()}
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
