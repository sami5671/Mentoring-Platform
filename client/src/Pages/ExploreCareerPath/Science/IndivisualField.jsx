import { Input } from "keep-react";
import CategoryBox from "../../../components/Categories/CategoryBox";
import { useGetSciencePathByIdQuery } from "../../../features/ExploreCareerPath/exploreCareerPathApi";
import Container from "../../../Shared/Container";
import { useParams } from "react-router-dom";

const IndivisualField = () => {
  const { id } = useParams();
  const { data: field, isLoading, isError } = useGetSciencePathByIdQuery(id);

  const categories = field?.wings;
  console.log(categories);

  return (
    <>
      <Container>
        <div>
          <h1 className="universal-heading lg:text-5xl text-2xl mt-8 lg:mt-8 font-bold mb-6">
            {field?.fieldName}
          </h1>
        </div>

        {/* ---------- */}
        <div className="flex items-center justify-center">
          <Input
            className="lg:w-1/2 mt-4 text-center text-black"
            label="Name"
            placeholder="Search here for Finding Your Specific Field..."
          />
        </div>
        {/* ---------- */}
        <div className="pt-4 pb-2 flex items-center gap-3 justify-between overflow-x-auto">
          {categories?.map((item) => (
            <CategoryBox
              key={item._id}
              label={item.wingName}
              //   selected={category === item.label}
            ></CategoryBox>
          ))}
        </div>
      </Container>
    </>
  );
};

export default IndivisualField;
