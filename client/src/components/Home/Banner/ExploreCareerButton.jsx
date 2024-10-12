import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ExploreCareerButton = () => {
  return (
    <div className=" bottom-4 left-0 right-0 px-4">
      <Link to="/exploreCareer">
        <button className="universal-button">
          <span className="hover-bg"></span> {/* Hover background */}
          <span className="content">
            Explore Career Path <FaMapMarkedAlt className="text-xl" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ExploreCareerButton;
