import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Banner.css"; // Keep your CSS import as is
import FindMentorButton from "./FindMentorButton";
import ExploreCareerButton from "./ExploreCareerButton";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Coming Soon", "MentiGo", "Opening in 1st, December"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <>
      <section className="min-h-screen hero-section flex flex-col justify-center items-center relative">
        {/* Background image with opacity-50 */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/bannerImg.png")`, opacity: 0.3 }}
        ></div>

        {/* Left Floating Image */}
        <div
          className="absolute top-1/2 lg:top-1/4 left-10 w-32 h-32 lg:w-48 lg:h-48 bg-cover bg-center bg-no-repeat transform animate-float-left"
          style={{ backgroundImage: `url("/menteeBall.gif")` }}
        ></div>

        {/* Right Floating Image */}
        <div
          className="absolute top-1/2 lg:top-1/4 right-10 w-32 h-32 lg:w-48 lg:h-48 bg-cover bg-center bg-no-repeat transform animate-float-right"
          style={{ backgroundImage: `url("/menteeJob.gif")` }}
        ></div>

        {/* Text section */}
        <div className="text-center mt-8 lg:mt-0 max-w-3xl px-4 opacity-95">
          <h1 className="text-4xl lg:text-7xl leading-tight font-bold">
            <span className="bg-gradient-to-tr from-black to-cyan-500 text-transparent bg-clip-text">
              Your journey,
            </span>
            <span className="bg-gradient-to-tr from-black to-yellow-400 text-transparent bg-clip-text ml-1 lg:ml-4">
              guided to greatness
            </span>
          </h1>

          <p className="text-xl lg:text-3xl text-yellow-800 font-bold mt-4 lg:mt-6">
            {text}
            <Cursor cursorBlinking="false" cursorStyle=".." />
          </p>

          <p className="text-gray-900 text-sm lg:text-lg mt-4">
            Mentoring can be both simple and life-changing. Let's start your
            journey and compete with the world.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6 text-[12px] lg:text-[16px]">
            <FindMentorButton />
            <ExploreCareerButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
