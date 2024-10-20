import Layout from "../../../App/Layout";
import Landing from "../../LandingHolder/Landing";
import Error404 from "../../Error404";
import LoginForm from "../../LoginForm";
import Courses from "../../../screens/Courses/Courses";
import News from "../../../screens/News/News";
import LoginSystem from "../../LoginSystem";
import Register from "../../../Register/Register";
import RegisterStep from "../../RegisterStep/RegisterStep";
import RegisterStep1 from "../../RegisterStep1/RegisterStep1";
import RegisterStep2 from "../../RegisterStep2/RegisterStep2";
import NewPass from "../../NewPass/NewPass";
import UserPanel from "../../UserPanel";
import { createBrowserRouter } from "react-router-dom";
export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/News",
        element: <News />,
      },
    ],
  },

  {
    path: "/Login",
    element: <LoginForm />,
    errorElement: <Error404 />,
  },

  {
    path: "/LoginSystem",
    element: <LoginSystem />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/RegisterStep",
    element: <RegisterStep />,
  },

  {
    path: "/RegisterStep1",
    element: <RegisterStep1 />,
  },

  {
    path: "/RegisterStep2",
    element: <RegisterStep2 />,
  },
  {
    path: "/NewPass",
    element: <NewPass />,
  },

  {
    path: "*",
    element: <Error404 />,
  },

  {
    path: "/Panel",
    element: <UserPanel />,
  },
]);