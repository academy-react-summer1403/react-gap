import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../component/common/Header/Header";
import Footer from "../../component/common/Footer/Footer";

const index = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default index;
