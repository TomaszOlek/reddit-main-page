import { useEffect, useState } from "react";
import Search from "../assets/search.svg";

interface HeaderType {
  menuOpen: boolean;
  handleMenuToggle: () => void;
  isMobile: boolean;
}

function Header({ menuOpen, handleMenuToggle, isMobile }: HeaderType) {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  return (
    <div className="header">
      {isMobile && (
        <div
          className={`hamburger ${menuOpen && "is-active"} `}
          id="hamburger"
          onClick={() => handleMenuToggle()}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      )}
      <h1 className="logo">reddit</h1>

      {!isMobile && (
        <div className="header-serch">
          <div style={{ position: "relative", height: "0", width: "0" }}>
            <img src={Search} className="search__icon" />
          </div>

          <input
            onChange={e => searchItems(e.target.value)}
            value={searchInput}
            type="text"
            placeholder="Search"
            className="header-serch__input"
          />
        </div>
      )}

      <a className="button">Log in</a>
      <a className="button button-fill">Register</a>
    </div>
  );
}

export default Header;
