import React, { lazy } from "react";

const Navbar = lazy(() => import("../Navbar"));

const Project = () => {


    return (

        <Navbar />
    )
}

export default Project;