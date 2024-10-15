import { apiSlice } from "../Api/apiSlice";

export const exploreCareerPathApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all science paths or fields
    getScienceCareerPath: builder.query({
      query: () => ({
        url: "/exploreScienceCareer",
        method: "GET",
      }),
    }),
    // get an individual path for science
    getSciencePathById: builder.query({
      query: (id) => ({
        url: `/exploreScienceCareer/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetScienceCareerPathQuery, useGetSciencePathByIdQuery } =
  exploreCareerPathApi;
