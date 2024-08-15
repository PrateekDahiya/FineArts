import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import "../styles/themes.css";
import FAlogo from "../assets/FAlogo/FAlogo.png";

const Nav = () => {
    const locationHook = useLocation();
    const [tab, setTab] = useState("");
    const [page, setPage] = useState(locationHook.pathname);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const currentpage = locationHook.pathname;
        setPage(currentpage);
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

    const expandMenu = () => {
        setShowMenu(true);
    };

    return (
        <>
            <div className="nav">
                <a href="/">
                    <img src={FAlogo} className="logo" alt="FineArts" />
                </a>
                {!showMenu ? (
                    <button
                        onClick={() => {
                            expandMenu();
                        }}
                    >
                        Menu
                    </button>
                ) : (
                    <></>
                )}
                <div className="nav-wide">
                    <div className="links-sec">
                        <Link
                            to="/"
                            className={`navlinks ${
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
                            className={`navlinks ${
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
                            className={`navlinks ${
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
                            className={`navlinks ${
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
            </div>
            {showMenu ? (
                <div className="nav-menu">
                    <Link
                        to="/"
                        className={`navlinks ${
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
                        className={`navlinks ${
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
                        className={`navlinks ${
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
                        className={`navlinks ${
                            tab === "workshops" ? "active-navlink" : ""
                        }`}
                        onClick={() => {
                            setTab("workshops");
                        }}
                    >
                        Workshops
                    </Link>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Nav;
