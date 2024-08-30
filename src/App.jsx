import About from "./components/About/About";
import Discover from "./components/Discover";
import Hero from "./components/Hero";
import coffeeTable from "./assets/image-about-dark.jpg";
import chair from "./assets/image-about-light.jpg";
import { useEffect, useState } from "react";
import jsonFile from "./assets/data.json";
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);
  const slides = jsonFile;
  return (
    <>
      <div className="homepage">
        <div className="homepage__top">
          <Hero
            image={
              screenWidth > 480
                ? slides[currentSlide].discover_image?.desktop
                : slides[currentSlide].discover_image?.mobile
            }
          />
          <Discover
            title={slides[currentSlide].discover_title}
            text={slides[currentSlide].discover_text}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
        <div className="homepage__bottom">
          <img
            src={coffeeTable}
            alt="image of a coffee table and 2 chairs"
            className="coffee__table"
          />
          <About />
          <img
            src={chair}
            alt="Very bright image of a chair"
            className="chair"
          />
        </div>
      </div>
    </>
  );
}

export default App;
