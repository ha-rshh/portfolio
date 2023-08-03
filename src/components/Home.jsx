import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/HeroImage.jpg";
import { Link } from "react-scroll";
import ParticlesComponent from "./Particles";

const Home = () => {
  return (
    <div
      name="home"
      className=" z-10 h-screen w-full"
    >
      <ParticlesComponent />
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I&#39;m a Front-End Developer
          </h2>
          <p className="max-w-md py-4    text-gray-500">
            I&#39;m a self-taught, passionate web developer 💪 creating captivating interfaces and constantly expanding
            skills 💻. Excited for what lies ahead! 😎
          </p>
          <div>
            <button className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white">
              <Link to="portfolio" smooth duration={500}>
                Portfolio
              </Link>
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my-vector"
            className="mx-auto w-4/5 rounded-full md:w-full relative bottom-16 md:static"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
