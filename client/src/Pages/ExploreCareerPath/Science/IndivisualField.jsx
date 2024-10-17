import { useGetSciencePathByIdQuery } from "../../../features/ExploreCareerPath/exploreCareerPathApi";
import Container from "../../../Shared/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setSearchTerm,
  setSelectedCategory,
} from "../../../features/ExploreCareerPath/ExploreCareerPathSlice";
import { Input, Select } from "rizzui";

const IndivisualField = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: field, isLoading, isError } = useGetSciencePathByIdQuery(id);
  const { categories, filteredCategories, searchTerm, selectedCategory } =
    useSelector((state) => state.exploreCareerPath);

  const [selectValue, setSelectValue] = useState(null);

  // Fetch data and dispatch categories to Redux
  useEffect(() => {
    if (field) {
      dispatch(setCategories(field.wings));
    }
  }, [dispatch, field]);

  // Map categories to options for Select dropdown
  const selectOptions = categories?.map((category) => ({
    label: category.wingName,
    value: category.wingName,
  }));

  // Handle Search input change and dispatch search term to Redux
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); // Dispatch search term to redux
  };
  // Handle Select dropdown change and update selectedCategory in Redux
  const handleSelectChange = (selected) => {
    setSelectValue(selected); // Update local state for the selected value
    dispatch(setSelectedCategory(selected.value)); // Dispatch selected category to redux
  };

  return (
    <Container>
      <div>
        <h1 className="universal-heading lg:text-5=4xl text-2xl mt-8 lg:mt-8 font-bold mb-6">
          {field?.fieldName}
        </h1>
      </div>

      {/* ----filtering------ */}
      <div className="flex justify-center gap-4">
        <div className="w-1/2">
          <Input
            label="Search For Findings"
            placeholder="Search here for find your path"
            inputClassName="border-slate-700 bg-white"
            value={searchTerm} // Bind to the Redux search term state
            onChange={handleSearchChange} // Trigger search when user types
          />
        </div>

        <div className="w-1/2">
          <Select
            label="Select Your Path"
            options={selectOptions} // Use dynamically filtered options
            onChange={handleSelectChange}
            value={selectValue}
            selectClassName="border-slate-700 bg-white"
            dropdownClassName="w-1/3 h-[100px] gap-2 flex flex-col bg-white"
          />
        </div>
      </div>
    </Container>
  );
};

export default IndivisualField;
