import React from "react";
import ecom from "../assets/ecom.png";
import codebuzz from "../assets/codebuzz.jpg";
import colorpicker from "../assets/colorpicker.jpg";
import whatsapp from "../assets/whatsapp.jpg";
import notes from "../assets/notes.jpg";
import aircom from "../assets/aircom.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecom,
      demo: "https://tangerine-lokum-332e01.netlify.app/",
      code: "https://github.com/ha-rshh/elevate-store",
    },
    {
      id: 2,
      src: codebuzz,
      demo: "https://flip-color-bro.netlify.app/",
      code: "https://github.com/ha-rshh/CodeBuzz",
    },
    {
      id: 3,
      src: colorpicker,
      demo: "https://github.com/ha-rshh/Color-picker-extension.git",
      code: "https://github.com/ha-rshh/Color-picker-extension.git",
    },
    {
      id: 4,
      src: whatsapp,
      demo: "https://ha-rshh.github.io/WhatsApp-Web-Clone/",
      code: "https://github.com/ha-rshh/WhatsApp-Web-Clone",
    },
    {
      id: 5,
      src: notes,
      demo: "https://notes-cd-app.netlify.app/",
      code: "https://github.com/ha-rshh/Notes-app",
    },
    {
      id: 5,
      src: aircom,
      demo: "https://ha-rshh.github.io/AirCommerce-E-Commerce-Website/",
      code: "https://github.com/ha-rshh/AirCommerce-E-Commerce-Website",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                  onClick={() => (window.location.href = demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                  onClick={() => (window.location.href = code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
