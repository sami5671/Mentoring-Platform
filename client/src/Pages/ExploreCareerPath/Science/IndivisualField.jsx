import { useGetSciencePathByIdQuery } from "../../../features/ExploreCareerPath/exploreCareerPathApi";
import Container from "../../../Shared/Container";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  selectedSubjectName,
  selectedTag,
  setCategories,
} from "../../../features/ExploreCareerPath/ExploreCareerPathSlice";
import { FaWpexplorer } from "react-icons/fa6";

const IndivisualField = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const {
    data: field,
    isLoading,
    isError,
    isSuccess,
  } = useGetSciencePathByIdQuery(id);

  // Fetch data and dispatch categories to Redux
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategories(field));
    }
  }, [dispatch, field, isSuccess]);

  const handleTagClick = (tag, subjectName) => {
    console.log(tag, subjectName);
    dispatch(selectedTag(tag));
    dispatch(selectedSubjectName(subjectName));
  };
  console.log(field);
  return (
    <Container>
      <div>
        <h1 className="universal-heading lg:text-5xl text-2xl mt-8 lg:mt-8 font-bold mb-6">
          {field?.fieldName}
        </h1>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-4">
        {field?.subject?.map((item) => (
          <div
            key={item?.tag}
            className="border border-gray-300 rounded-lg w-full h-[420px] shadow-2xl layout-css-cards hover:shadow-xl transition-shadow duration-300 relative"
          >
            <img
              src={item?.image}
              alt="field"
              className="shadow-2xl w-full h-[200px]"
            />
            <h3 className="text-2xl font-bold h-20 mt-10 text-center">
              {item?.subjectName}
            </h3>

            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-center items-center">
              <Link to={`/wingDetails/${id}`}>
                <button
                  onClick={() => handleTagClick(item?.tag, item?.subjectName)}
                  className="universal-button w-full"
                >
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
    </Container>
  );
};

export default IndivisualField;
