import { FaWpexplorer } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ScienceCard = ({ item }) => {
  const { description, imageUrl, name } = item || {};

  return (
    <div className="border border-gray-300 rounded-lg p-6 text-center h-[500px] w-full py-12 shadow-2xl layout-css hover:shadow-xl transition-shadow duration-300 relative flex flex-col justify-between">
      <img
        src={imageUrl}
        alt=""
        className="w-24 h-24 rounded-full mx-auto mb-4 animate-float-left shadow-2xl"
      />
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-8 text-left">{description}</p>

      {/* Button at the bottom with hover effect and proper alignment */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-center items-center">
        <Link to={`${item.pageUrl}`}>
          <button className="universal-button w-full">
            <span className="hover-bg"></span> {/* Hover background */}
            <span className="content">
              Explore <FaWpexplorer className="text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScienceCard;
