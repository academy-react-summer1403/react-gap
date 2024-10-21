import { RouterProvider } from "react-router-dom";
import React from "react";
import { Routers } from "../config/router/auth.router";


const App = () => {
  return (
    <div>
      <RouterProvider router={Routers} />
    </div>
  );
};

export default App;
