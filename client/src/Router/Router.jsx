import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import TrackPath from "../Pages/ExploreCareerPath/Trackpath";
import Science from "../Pages/ExploreCareerPath/Science/Science";
import Commerce from "../Pages/ExploreCareerPath/Commerce/Commerce";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exploreCareer",
        element: <TrackPath />,
      },
      {
        path: "/science",
        element: <Science />,
      },
      {
        path: "/commerce",
        element: <Commerce />,
      },
    ],
  },
]);
