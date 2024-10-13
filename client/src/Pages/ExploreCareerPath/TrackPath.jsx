import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Science",
    description:
      "Explore the fascinating world of science, technology, and innovations.",
    imageUrl: "/science.gif",
    pageUrl: "/science",
  },
  {
    id: 2,
    name: "Arts",
    description:
      "Delve into the realm of creativity, culture, and artistic expression.",
    imageUrl: "/law.gif",
    pageUrl: "/arts",
  },
  {
    id: 3,
    name: "Commerce",
    description:
      "Understand the mechanics of business, economics, and financial systems.",
    imageUrl: "/commerce.gif",
    pageUrl: "/commerce",
  },
];

const TrackPath = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center container gap-5 mt-12 lg:mt-32 px-5 lg:px-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg p-6 text-center h-[350px] w-72 py-12 shadow-2xl layout-css hover:shadow-xl transition-shadow duration-300 relative flex flex-col justify-between"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 animate-float-left shadow-2xl"
          />
          <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-8">{item.description}</p>

          {/* Button at the bottom with hover effect */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <Link to={`${item.pageUrl}`}>
              <button className="universal-button">
                <span className="hover-bg"></span> {/* Hover background */}
                <span className="content">
                  Explore <FaWpexplorer className="text-xl" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackPath;
