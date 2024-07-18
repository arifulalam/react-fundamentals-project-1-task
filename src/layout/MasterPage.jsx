/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/navbar/index";
import {Outlet} from "react-router-dom";

const MasterPage = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}

export default MasterPage;