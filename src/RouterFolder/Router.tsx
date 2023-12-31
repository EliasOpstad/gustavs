//React router
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

import {
  PATH_ABOUTGUSTAV,
  PATH_HOME,
  PATH_JOBBHOSOSS,
  PATH_ORDERTABLE,
} from "./Routes";

import { AboutGustav } from "../pages/AboutGustav";
import { OrderTable } from "../pages/OrderTable";
import JobbHosOss from "../pages/JobbHosOss";

const Router = () => (
  <Routes>
    <Route path={`${PATH_HOME}`} element={<HomePage />} />
    <Route path={`${PATH_ABOUTGUSTAV}`} element={<AboutGustav />} />
    <Route path={`${PATH_ORDERTABLE}`} element={<OrderTable />} />
    <Route path={`${PATH_JOBBHOSOSS}`} element={<JobbHosOss />} />
  </Routes>
);
export default Router;
