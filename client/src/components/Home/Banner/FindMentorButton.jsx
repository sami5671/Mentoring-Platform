import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const FindMentorButton = () => {
  return (
    <div>
      <button className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full">
        Find Your Mentor{" "}
        <span>
          <FaChalkboardTeacher />
        </span>
      </button>
    </div>
  );
};

export default FindMentorButton;
