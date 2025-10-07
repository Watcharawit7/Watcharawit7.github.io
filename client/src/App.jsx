import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";

const Navbar = lazy(() => import("./page/Navbar"));
const Footer = lazy(() => import("./page/Footer"));

import "./utils.css";

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
