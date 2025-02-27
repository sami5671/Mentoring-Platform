import { apiSlice } from "../Api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (code) => ({
        url: `/auth/googleLogin?code=${code}`,
        method: "GET",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Google Auth Response:", data);

          localStorage.setItem(
            "auth",
            JSON.stringify({
              user: data,
            })
          );

          dispatch(
            userLoggedIn({
              user: data,
            })
          );
        } catch (error) {
          console.error("Error handling Google authentication:", error);
        }
      },
    }),
  }),
});

export const { useGoogleLoginMutation } = authApi;
