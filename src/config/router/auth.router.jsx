import Layout from "../../App/Layout";
import Landing from "../../screens/Landing";
import Error404 from "../../component/Error404";
import Login from "../../screens/Login";
import Courses from "../../screens/Courses";
import News from "../../screens/News";
import LoginSystem from "../../component/LoginSystem";
import Register from "../../screens/Register";
import RegisterStep from "../../component/RegisterStep";
import RegisterStep1 from "../../component/RegisterStep1";
import RegisterStep2 from "../../component/RegisterStep2";
import RegisterForm from "../../component/RegisterForm";
import ResetPass from "../../screens/ResetPass";
import UserPanel from "../../component/UserPanel";
import DetailNews from "../../screens/DetailNews";
import TitleCourse from "../../screens/TitleCourse";
import { createBrowserRouter } from "react-router-dom";
import Connect from "../../screens/Connect";
import MyCourses from "../../screens/Panel/MyCourses";
import PanelLayout from "../../App/PanelLayout";
import EditProfile from "../../screens/Panel/EditProfile";
import Reservation from "../../screens/Panel/Reservation";
import Favorite from "../../screens/Panel/Favorite";
import Comments from "../../screens/Panel/Comments";
import Counter from "../../screens/Panel/Counter";
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
      {
        path: "/DetailNews",
        element: <DetailNews />,
      },
      {
        path: "/TitleCourse",
        element: <TitleCourse />,
      },
      {
        path: "/Connect",
        element: <Connect />,
      },

      {
        path: "/Login",
        element: <Login />,
        errorElement: <Error404 />,
      },

      {
        path: "/LoginSystem",
        element: <LoginSystem />,
      },
      {
        path: "/RegisterForm",
        element: <RegisterForm />,
      },

      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Step",
        element: <RegisterStep />,
      },

      {
        path: "/Step1",
        element: <RegisterStep1 />,
      },

      {
        path: "/Step2",
        element: <RegisterStep2 />,
      },
      {
        path: "/NewPass",
        element: <ResetPass />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },

  {
    path: "/",
    element: <PanelLayout />,
    children: [
      {
        path: "/EditPro",
        element: <EditProfile />,
      },
      {
        path: "/UserMyCourse",
        element: <MyCourses />,
      },
      {
        path: "/UserReserv",
        element: <Reservation />,
      },
      {
        path: "/UserFavorit",
        element: <Favorite />,
      },
      {
        path: "/UserComments",
        element: <Comments />,
      },
      {
        path: "/UserCounter",
        element: <Counter />,
      },
    ],
  },
]);
