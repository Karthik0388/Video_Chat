import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import { connectionWithSocket } from "./utils/wssConnection/wssConnection";
import LoginPage from "./Components/Auth/LoginPage";

const App = () => {
  useEffect(() => {
    connectionWithSocket();
  }, []);
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
