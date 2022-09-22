import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Sale from "./pages/sale";
import Paid from "./pages/paid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Routes>
        <Route path="/" element={<Navigate to="ra-card" />} />
        <Route exact path="/ra-card" element={<Home />} />
        <Route exact path="/sale" element={<Sale />} />
        <Route exact path="/paid" element={<Paid />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
