import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sale from "./pages/sale";
import Paid from "./pages/paid";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sale" element={<Sale />} />
        <Route exact path="/paid" element={<Paid />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
