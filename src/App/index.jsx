import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error404 from "../component/Error404/Error404";
import Layout from "../component/Layout/Layout";
import Landing from "../component/LandingHolder/Landing";
import Login from "../component/LoginForm/Login";
import Cours from "../screens/Landing/Courses/LandingCourses";
import News from "../screens/News/News";
import UserPanel from "../component/UserPanel";
import HolderConnect from "../component/HolderConnecting/HolderConnect";

const index = () => {
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/Error",
          element: <Error404 />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/courses",
          element: <Cours />,
        },
        {
          path: "/News",
          element: <News />,
        },
        {
          path:"/Connect",
          element:<HolderConnect/>
        }
      ],
    },

    {
      path: "/Login",
      element: <Login />,
      errorElement: <Error404 />,
    },

    {
      path: "/Error",
      element: <Error404 />,
    },
{
 path:"/Panel",
 element:<UserPanel/>
}
  ]);

  return (
    <div>
      <RouterProvider router={Routers} />
    </div>
  );
};

export default index;
