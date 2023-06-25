import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            About
          </p>
          <p className="mt-20 text-xl">
            As a front-end developer 🚀 who embarked on this exciting journey just
            10 months ago, I have already experienced a transformative growth in
            my skills and passion for creating captivating and user-friendly web
            interfaces. With each passing day, I dive deeper into the realm of
            web development, driven by a thirst for knowledge and a desire to
            craft exceptional digital experiences.
          </p>
          <br />
          <p className="text-xl">
            As I continue on this exhilarating journey, I am eager to tackle new
            challenges, embrace emerging technologies, and contribute to the
            ever-evolving landscape of web development. With an insatiable
            curiosity, a relentless drive for growth, and a genuine passion for
            crafting remarkable digital experiences, I am excited to see where
            the next months and years will take me as a web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
