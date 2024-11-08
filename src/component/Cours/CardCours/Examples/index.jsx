import React from "react";
import { Pagination } from "antd";

const App = () => (
  <div className="mr-96 mt-28">
    <Pagination defaultCurrent={1} total={50} />;
  </div>
);

export default App;
