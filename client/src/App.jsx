import { BrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";

import "./utils.css";

const App = () => {
  return (
    <BrowserRouter >
      <Layout />
    </BrowserRouter>
  );
};

export default App;
