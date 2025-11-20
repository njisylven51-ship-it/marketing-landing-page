import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Entrepreneur",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
    text:
      "I found exactly the gadgets I needed for my startup — fast delivery and excellent support!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Freelance Developer",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800",
    text:
      "This marketplace has a huge variety of components. I was able to find rare parts for my project easily.",
  },
  {
    id: 3,
    name: "Sara Kim",
    role: "Tech Enthusiast",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    text:
      "I love browsing this site! The interface is clean and it’s easy to compare different products.",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Startup Founder",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800",
    text:
      "Buying electronics has never been easier. The reviews are helpful and the delivery is reliable.",
  },
];


export default function Testimonials() {
  const [index, setIndex] = React.useState(0);

  function nextSlide() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#9be8ff] relative px-4 py-20">

      {/* Dim holographic background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543966888-01834f2b4f63?q=80&w=2000')",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10">
        {/* LEFT: TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-[0_0_10px_#00ffff40]">
            DISCOVER THE BEST TECH
          </h1>

          <p className="text-cyan-200 mb-6 max-w-md">
            Browse, compare, and connect with top tech products and vendors all in one place. Find exactly what you need with ease and confidence.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold w-fit text-black shadow-[0_0_12px_#00eaff]">
            Explore Now
          </button>
        </div>
        {/* RIGHT: SLIDER */}
        <div className="relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0b1026] text-cyan-100 rounded-2xl p-6 w-full max-w-md mx-auto shadow-[0_0_20px_#00ffff40] border border-cyan-400/20"
          >
            <img
              src={testimonials[index].img} 
              alt={testimonials[index].name}
              className="w-full h-60 object-cover rounded-xl mb-4 shadow-[0_0_10px_#00eaff50]"
            />

            <div className="flex gap-2 items-start mb-3">
              <div className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_8px_#00f0ff]">
                “
              </div>
              <p className="text-cyan-100">{testimonials[index].text}</p>
            </div>

            <p className="font-semibold mt-3 text-white">
              {testimonials[index].name}
            </p>
            <p className="text-cyan-300 text-sm">{testimonials[index].role}</p>
          </motion.div>

          {/* Left/Right Buttons */}
          <div className="flex justify-center gap-3 mt-5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-cyan-400 text-black rounded-full shadow-[0_0_10px_#00eaff] hover:scale-110 transition"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-cyan-400 text-black rounded-full shadow-[0_0_10px_#00eaff] hover:scale-110 transition"
            >
              ›
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? "bg-cyan-400 shadow-[0_0_8px_#00eaff]"
                    : "bg-cyan-900"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

















