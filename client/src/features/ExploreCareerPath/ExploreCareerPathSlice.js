import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  filteredCategories: [],
  searchTerm: "",
  selectedCategory: null,
};

const exploreCareerPathSlice = createSlice({
  name: "exploreCareerPath",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.filteredCategories = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredCategories = state.categories.filter((category) =>
        category.wingName.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredCategories = state.categories.filter((category) =>
        category.wingName.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setCategories, setSearchTerm, setSelectedCategory } =
  exploreCareerPathSlice.actions;
export default exploreCareerPathSlice.reducer;
