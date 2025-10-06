import React, { lazy } from "react";

const Navbar = lazy(() => import("../Navbar"));

const Project = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>My Projects</h1>
      </div>
    </>
  );
};

export default Project;
