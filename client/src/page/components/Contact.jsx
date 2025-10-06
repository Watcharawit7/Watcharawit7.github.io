import React, { lazy } from "react";

const Navbar = lazy(() => import("../Navbar"));

const Contact = () => {


    return (

        <Navbar />
    )
}

export default Contact;