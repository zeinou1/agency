import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Aos from "aos";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";

//! useEffect aos  Execution

function App() {
  // ! useEffect aos  Execution
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
