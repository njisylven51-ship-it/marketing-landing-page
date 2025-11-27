import React from "react";
import img1 from "../../assets/logo.png";

const About = () => {
  return (
    <div className="flex justify-center align-center items-center text-[#9be8ff]">
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#9be8ff] px-20 py-40 ">
      <div className="max-w-screen mx-auto flex flex-col gap-16">

        {/* TOP SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <article className="space-y-9">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#9be8ff]  drop-shadow-[0_0_10px_#00ffff40] lg:text-7xl">
              Welcome to TechNova Market
            </h1>
            <p className="text-lg text-[#c8f4ff]/80 leading-relaxed lg:text-2xl">
              A marketplace built for creators and tech lovers. Discover curated
              hardware, next-gen gadgets, and innovative tools from verified makers
              around the world.
            </p>
          </article>

          <div className="flex justify-center">
            <img
              src={img1}
              alt="About visual"
              className="rounded-2xl  w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* MIDDLE SECTION */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <p className="text-lg leading-relaxed text-[#d8f7ff] lg:text-xl">
            TechNova Market blends community-driven discovery with transparent and reliable
            tech commerce. Every product is vetted for quality, every seller is verified,
            and every interaction is designed for modern users who expect clarity,
            efficiency, and trust. Explore emerging hardware, next-gen gadgets, and
            innovative tools curated to elevate creativity and streamline productivity.
            Whether you're upgrading your setup or searching for the next breakthrough
            device, TechNova makes it simple to browse confidently, compare easily, and
            upgrade effortlessly in a marketplace built for the future.
          </p>
        </section>

        {/* BUTTON */}
        <div className="flex justify-center text-white">
          <button className="px-8 py-3 rounded-xl bg-[#4ae4ff] text-black font-semibold text-lg shadow-lg hover:shadow-[#4ae4ff]/40 hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default About;
