import { useEffect, useState } from "react";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png"
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      <img
        src={images[index]}
        alt="Railway Infrastructure"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Rail Track Tampering Detection <br />
          & Monitoring System
        </h1>

        <p className="text-white/90 max-w-3xl text-base md:text-lg mb-8">
          AI-powered surveillance and early threat detection for railway
          infrastructure security.
        </p>

        <button className="bg-red-700 text-white px-8 py-3 text-sm font-semibold tracking-wide hover:bg-red-800 transition">
          ENTER MONITORING CONSOLE
        </button>

      </div>
    </section>
  );
}
