import { useSelector } from "react-redux";
import Container from "../../../Shared/Container";

const WingDetails = () => {
  const { filteredCategories, subjectName } = useSelector(
    (state) => state.exploreCareerPath
  );


  return (
    <Container>
      <div className="">
        {/* -- */}
        <div>
          <h1 className="universal-heading lg:text-5xl text-2xl mt-8 lg:mt-8 font-bold mb-6">
            {subjectName}
          </h1>
        </div>
        {/* ---- */}
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-1">
          {filteredCategories.map((category) => (
            <div
              key={category?.wingName}
              className="layout-css px-4 py-6 rounded-2xl shadow-xl"
            >
              <div>
                <h1>{category?.wingName}</h1>
                <p>Job Oppotunities: {category?.jobOpportunities?.length}</p>
                <p>Higher Studies: {category?.higherStudies?.length}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WingDetails;
