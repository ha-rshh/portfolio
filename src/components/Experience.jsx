import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import photoshop from "../assets/photoshop.png";
import git from "../assets/git.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-lime-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-cyan-400",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b to-gray-800 from-black "
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center text-white pt-40">
        <div className="mx-6">  
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6">These are the technologies I&#39;ve worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
