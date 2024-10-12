import MenteeCard from "./MenteeCard";

const MenteeLanding = () => {
  return (
    <>
      <div className="lg:mt-28 container">
        <div className="flex justify-center mb-24">
          <h1 className="lg:text-5xl font-bold universal-heading">
            How do I become a mentee?
          </h1>
        </div>

        {/* process */}
        <div className="flex items-center flex-col lg:flex-row justify-center gap-3 lg:gap-12">
          <MenteeCard
            heading={"Registration"}
            image={"/registration.png"}
            description={
              "You fill out the registration form and pay a €30 fee to let you’re serious. This amount will be credited to you later."
            }
          />
          <MenteeCard
            heading={"Matching"}
            image={"/matching.png"}
            description={
              "You fill out the matching questionnaire. Based on your answers, we will suggest suitable mentors for you – until you are satisfied."
            }
          />
          <MenteeCard
            heading={"Payment"}
            image={"/pay.png"}
            description={
              "If you are matched, you pay the mentee fee. It depends on your individual situation. The registration fee will be credited to you."
            }
          />
          <MenteeCard
            heading={"Mentoring"}
            image={"/mentoring.png"}
            description={
              "Time to meet your mentor! The two of you will get started with the program right away."
            }
          />
        </div>
      </div>
    </>
  );
};

export default MenteeLanding;
