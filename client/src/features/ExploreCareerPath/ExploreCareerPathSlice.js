import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  filteredCategories: [], // New state for filtered data
  tag: [], // Current selected tag(s)
  subjectName: "",
};

const exploreCareerPathSlice = createSlice({
  name: "exploreCareerPath",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.filteredCategories = action.payload.wings;
    },
    selectedTag: (state, action) => {
      state.tag = action.payload;

      // Filter the filteredCategories based on the selected tag
      state.filteredCategories = state.categories.wings.filter((wing) =>
        wing.tag.some((tag) => action.payload.includes(tag))
      );
    },
    selectedSubjectName: (state, action) => {
      state.subjectName = action.payload;
    },
  },
});

export const { setCategories, selectedTag, selectedSubjectName } =
  exploreCareerPathSlice.actions;
export default exploreCareerPathSlice.reducer;
