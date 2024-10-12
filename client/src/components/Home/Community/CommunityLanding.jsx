import React from "react";
import CommunityCard from "./CommunityCard";

const CommunityLanding = () => {
  return (
    <>
      <div className="mt-24 mb-24 container">
        <div className="flex justify-center mb-24">
          <h1 className="lg:text-5xl font-extrabold bg-gradient-to-tr from-pink-950 to-orange-200 text-transparent bg-clip-text">
            Who can join our community?
          </h1>
        </div>

        {/* process */}
        <div className="flex items-center justify-center gap-12">
          <CommunityCard
            image={"/mentee.jpg"}
            heading={"Mentees"}
            description={
              "As a mentee, you can gain valuable insights, guidance, and support from experienced mentors to achieve your career and personal goals."
            }
          />
          <CommunityCard
            image={"/mentor.png"}
            heading={"Mentors"}
            description={
              "Mentors provide wisdom, guidance, and encouragement to help mentees navigate their career paths, share knowledge, and grow their network."
            }
          />
          <CommunityCard
            image={"/employer.jpg"}
            heading={"Employers"}
            description={
              "Employers can engage with a talented pool of mentees and mentors, fostering growth, innovation, and collaboration within their workforce."
            }
          />
        </div>
      </div>
    </>
  );
};

export default CommunityLanding;
