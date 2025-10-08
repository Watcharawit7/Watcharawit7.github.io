import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../page/Home"));
const Project = lazy(() => import("../page/components/Project"));
const Work = lazy(() => import("../page/components/WorkExperience"));
const Skill = lazy(() => import("../page/components/Skill"));
const Contact = lazy(() => import("../page/components/Contact"));
const NotFound = lazy(() => import("../page/NotFound"));
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
              <Route path="/work" element={<Work />} />
              <Route path="/project" element={<Project />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />

              {/* project detail */}



              {/* NotFound */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Layout;
