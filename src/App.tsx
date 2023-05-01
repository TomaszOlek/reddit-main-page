import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.history.pushState({ menuOpen }, "");

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.menuOpen !== undefined) {
        setMenuOpen(event.state.menuOpen);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
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
