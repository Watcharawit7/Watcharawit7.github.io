import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../page/Home"));
const Project = lazy(() => import("../page/components/Project"));
import Loading from "./Loading";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="mb-0">
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </Suspense>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Layout;
