import Layout from "../../Layout"
import Landing from "../../../component/LandingHolder/Landing"
import Error404 from "../../Error404"
import LoginForm from "../../../component/LoginForm"
import Courses from "../../../screens/Courses/Courses"
import News from "../../../screens/News/News"
import LoginSystem from "../../LoginSystem"
import Register from '../../../Register/Register';
import RegisterStep from '../../../component/RegisterStep/RegisterStep';
import RegisterStep1 from '../../../component/RegisterStep1/RegisterStep1';
import RegisterStep2 from '../../../component/RegisterStep2/RegisterStep2';
import NewPass from '../../../component/NewPass/NewPass';
import UserPanel from "../../../component/UserPanel";
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
