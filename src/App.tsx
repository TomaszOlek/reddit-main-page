import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBackButton = (event: PopStateEvent) => {
    if (menuOpen) {
      // event.preventDefault();
      // setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.history.pushState({ menuOpen }, "");
      window.addEventListener("popstate", handleBackButton);
    } else {
      window.history.back();
      window.removeEventListener("popstate", handleBackButton);
    }

    return () => {
      window.history.back();
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [menuOpen]);

  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 1364;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="App">
      <Header
        handleMenuToggle={handleMenuToggle}
        menuOpen={menuOpen}
        isMobile={isMobile}
      />
      <>
        <NavBar menuOpen={menuOpen} isMobile={isMobile} />
        <Content isMobile={isMobile} />
      </>
    </div>
  );
}

export default App;
