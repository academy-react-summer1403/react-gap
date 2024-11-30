import { RouterProvider } from "react-router-dom";
import React from "react";
import { Routers } from "../config/router/auth.router";
import { QueryClient, QueryClientProvider } from "react-query";


const App = () => {
  const client = new QueryClient()
  return (
    <div>

      <QueryClientProvider client={client}>
        <RouterProvider router={Routers} />
      </QueryClientProvider>
      
    </div>
  );
};

export default App;
