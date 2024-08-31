import Navbar from "../Navbar";

export default function Hero({ image, setCurrentSlide }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Navbar />
      <div className="slider__buttons mobile__slider__buttons">
        <button
          className="slider__buttons__left"
          onClick={() =>
            setCurrentSlide((prev) => {
              if (prev == 0) {
                return 2;
              } else {
                return prev - 1;
              }
            })
          }
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="slider__buttons__right"
          onClick={() =>
            setCurrentSlide((prev) => {
              if (prev == 2) {
                return 0;
              } else {
                return prev + 1;
              }
            })
          }
        >
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
