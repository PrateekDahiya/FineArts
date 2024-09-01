import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "boxicons/css/boxicons.min.css";
import "../styles/Sidebar.css";

const Sidebar = () => {
    const locationHook = useLocation();
    const [tab, setTab] = useState("");
    const [page, setPage] = useState(locationHook.pathname);

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
        } else if (page === "/events") {
            setTab("events");
        } else if (page === "/artgallery") {
            setTab("artgallery");
        } else {
            setTab("");
        }
    }, [page]);

    // const expandMenu = () => {
    //     setShowMenu(true);
    // };

    return (
        <div className="nav-menu">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="menu-head">FineArts</h1>
            </Link>
            <Link
                to="/"
                className={`navlinks nav-menu-itm ${
                    tab === "home" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("home");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                />
                Home
            </Link>
            <Link
                to="/events"
                className={`navlinks nav-menu-itm ${
                    tab === "events" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("events");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/16956/16956841.png"
                />
                Events
            </Link>
            <Link
                to="/workshops"
                className={`navlinks nav-menu-itm ${
                    tab === "workshops" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("workshops");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/9079/9079485.png"
                />
                Workshops
            </Link>
            <Link
                to="/artworks"
                className={`navlinks nav-menu-itm ${
                    tab === "artworks" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("artworks");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/11687/11687276.png"
                />
                Artworks
            </Link>
            <Link
                to="/artgallery"
                className={`navlinks nav-menu-itm ${
                    tab === "artgallery" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("artgallery");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/2187/2187942.png"
                />
                Art Gallery
            </Link>
            <Link
                to="/confluence"
                className={`navlinks nav-menu-itm ${
                    tab === "confluence" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("confluence");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/471/471709.png"
                />
                Confluence
            </Link>
            <HashLink
                smooth
                to="/confluence#Sponsors"
                className={`navlinks nav-menu-itm ${
                    tab === "sponsors" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("sponsors");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/11182/11182403.png"
                />
                Our Sponsors
            </HashLink>
            <HashLink
                smooth
                to="/#Allies"
                className={`navlinks nav-menu-itm ${
                    tab === "allies" ? "active-navlink" : ""
                }`}
                onClick={() => {
                    setTab("allies");
                }}
            >
                <img
                    className="menu-link-image"
                    src="https://cdn-icons-png.flaticon.com/128/8215/8215621.png"
                />
                Our Allies
            </HashLink>

            <div className="social-media">
                <a href="https://www.facebook.com/faclubnitk" target="_blank">
                    <i className="bx bxl-facebook-square"></i>
                </a>
                <a
                    href="https://www.instagram.com/fineartsclub.nitkkr/"
                    target="_blank"
                >
                    <i className="bx bxl-instagram-alt"></i>
                </a>
                <a
                    href="https://www.linkedin.com/company/fine-arts-modelling-club"
                    target="_blank"
                >
                    <i className="bx bxl-linkedin-square"></i>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
