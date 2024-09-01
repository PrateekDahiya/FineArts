import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "../styles/Nav.css";
import "../styles/themes.css";
import Sidebar from "./Sidebar";
import FAlogo from "../assets/FAlogo/FAlogo.png";

const Nav = () => {
    const locationHook = useLocation();
    const [tab, setTab] = useState("");
    const [page, setPage] = useState(locationHook.pathname);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const currentpage = locationHook.pathname;
        setPage(currentpage);
        setShowMenu(false);
    }, [locationHook]);

    useEffect(() => {
        if (page === "/" || page === "/home") {
            setTab("home");
        } else if (page === "/artworks") {
            setTab("artworks");
        } else if (page === "/confluence") {
            setTab("confluence");
        } else if (page === "/workshops") {
            setTab("workshops");
        } else {
            setTab("");
        }
    }, [page]);

    return (
        <>
            {showMenu ? <Sidebar className="nav-sidebar" /> : null}

            <div className="nav">
                <a href="/">
                    <img src={FAlogo} className="logo" alt="FineArts" />
                </a>
                <div className="nav-wide">
                    <div className="links-sec">
                        <Link
                            to="/"
                            className={`navlinks nav-bar-wide-links ${
                                tab === "home" ? "active-navlink" : ""
                            }`}
                            onClick={() => {
                                setTab("home");
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/artworks"
                            className={`navlinks nav-bar-wide-links ${
                                tab === "artworks" ? "active-navlink" : ""
                            }`}
                            onClick={() => {
                                setTab("artworks");
                            }}
                        >
                            Artworks
                        </Link>
                        <Link
                            to="/confluence"
                            className={`navlinks nav-bar-wide-links ${
                                tab === "confluence" ? "active-navlink" : ""
                            }`}
                            onClick={() => {
                                setTab("confluence");
                            }}
                        >
                            Confluence
                        </Link>
                        <Link
                            to="/workshops"
                            className={`navlinks nav-bar-wide-links ${
                                tab === "workshops" ? "active-navlink" : ""
                            }`}
                            onClick={() => {
                                setTab("workshops");
                            }}
                        >
                            Workshops
                        </Link>
                    </div>
                </div>

                <i
                    className="bx bx-menu nav-menu-icon"
                    onClick={() => setShowMenu(!showMenu)}
                ></i>
            </div>
        </>
    );
};

export default Nav;
