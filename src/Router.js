import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/jiyeon/Login/Login";
import Main from "./pages/jiyeon/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
