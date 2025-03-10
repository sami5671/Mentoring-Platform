import "./Banner.css"; // Keep your CSS import as is
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6 md:px-12">
        {/* Content Container */}
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-syncFont">
            <span className="block">Your journey</span>
            <span className="block">guided to greatness</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-2xl lg:text-xl text-gray-300 font-bangla">
            Mentoring can be both simple and life-changing. Start your journey
            and compete with the world.
          </p>
          <p className="font-bangla">আমার সোনার বাংলা</p>
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 text-lg font-semibold bg-gray-700 hover:bg-gray-800 transition rounded-full shadow-lg">
              Explore Your Path
            </button>
            <button className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-300 transition rounded-full shadow-lg">
              Find Your Mentor
            </button>
          </div>
          {/* survey button */}
          <div className="mt-6">
            <Link to="/surveyForm">
              <button className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-300 transition rounded-full shadow-lg">
                Survey Running
                <span>12:00:13</span>
              </button>
            </Link>
          </div>
          {/* survey button */}
        </div>
      </section>
    </>
  );
};

export default Banner;
