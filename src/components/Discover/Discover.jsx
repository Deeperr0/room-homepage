export default function Discover({ title, text, setCurrentSlide }) {
  return (
    <div className="discover">
      <h1 className="discover__title">{title}</h1>
      <p className="discover__text">{text}</p>
      <a href="#" className="discover__link">
        SHOP NOW
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            fill="#000"
            fillRule="nonzero"
          />
        </svg>
      </a>
      <div className="slider__buttons">
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
