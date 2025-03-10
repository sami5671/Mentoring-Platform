import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import TrackPath from "../Pages/ExploreCareerPath/Trackpath";
import Science from "../Pages/ExploreCareerPath/Science/Science";
import Commerce from "../Pages/ExploreCareerPath/Commerce/Commerce";
import IndivisualField from "../Pages/ExploreCareerPath/Science/IndivisualField";
import WingDetails from "../Pages/ExploreCareerPath/Science/WingDetails";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Survey from "../Pages/Survey/Survey";

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
        path: "/science/:id",
        element: <IndivisualField />,
      },
      {
        path: "/wingDetails/:id",
        element: <WingDetails />,
      },
      {
        path: "/commerce",
        element: <Commerce />,
      },
      {
        path: "/surveyForm",
        element: <Survey />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
