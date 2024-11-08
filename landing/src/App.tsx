import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/hero-section-component/hero-section";
import Footer from "./components/footer-component/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </>
  );
}

export default App;
