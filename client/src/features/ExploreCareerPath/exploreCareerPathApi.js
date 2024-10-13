import { apiSlice } from "../Api/apiSlice";

export const exploreCareerPathApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScienceCareerPath: builder.query({
      query: () => ({
        url: "/scienceCareerPath",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetScienceCareerPathQuery } = exploreCareerPathApi;
