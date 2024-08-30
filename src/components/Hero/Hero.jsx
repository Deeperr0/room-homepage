import Navbar from "../Navbar";

export default function Hero({ image }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Navbar />
    </div>
  );
}
