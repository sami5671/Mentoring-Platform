import { FaWpexplorer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";

const ScienceCard = ({ item }) => {
  const { description, imageUrl, fieldName, wings, _id } = item || {};

  // --------------------- Counting the Job Opportunities ----------------------

  // Use reduce to sum all job opportunities across all wings
  const totalJob = wings?.reduce(
    (total, wing) => total + wing.jobOpportunities.length,
    0
  );

  // ----------------------------------------------------------------

  return (
    <div className="border border-gray-300 rounded-lg p-6 h-[500px] w-full py-12 shadow-2xl layout-css-cards hover:shadow-xl transition-shadow duration-300 relative">
      <img
        src={imageUrl}
        alt="field"
        className="w-24 h-24 rounded-full mx-auto mb-2 animate-float-left shadow-2xl"
      />
      <h3 className="text-2xl font-bold h-20 mt-6 text-center">{fieldName}</h3>
      <div className="w-full">
        <h2 className="">
          <span className="flex items-center gap-1 font-semibold">
            <FaBookReader /> Total Wings:{" "}
            <span className="font-bold">{wings?.length}</span>
          </span>
        </h2>
        <h2 className="mt-2">
          <span className="flex items-center gap-1 font-semibold">
            <GiOfficeChair /> Job Opportunities:{" "}
            <span className="font-bold">{totalJob}</span>
          </span>
        </h2>
        <p className="text-gray-600 mt-4 text-left">{description}</p>
      </div>

      {/* Button at the bottom with hover effect and proper alignment */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-center items-center">
        <Link to={`/science/${_id}`}>
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
