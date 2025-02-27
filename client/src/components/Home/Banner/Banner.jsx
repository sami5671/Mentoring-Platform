import "./Banner.css"; // Keep your CSS import as is

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
          <p className="mt-6 text-lg md:text-2xl lg:text-xl text-gray-300">
            Mentoring can be both simple and life-changing. Start your journey
            and compete with the world.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 text-lg font-semibold bg-gray-700 hover:bg-gray-800 transition rounded-full shadow-lg">
              Explore Your Path
            </button>
            <button className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-gray-300 transition rounded-full shadow-lg">
              Find Your Mentor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
