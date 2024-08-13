import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Confluence.css";
import Sponsersgrid from "./Sponsersgrid";
import img1 from "../assets/Confluence/image1.png";
import img2 from "../assets/Confluence/image2.jpeg";
import img3 from "../assets/Confluence/image3.jpeg";
import img4 from "../assets/Confluence/image4.png";

const boxes = [
    { src: img2, alt: "Events", title: "Events", link: "/events" },
    {
        src: img4,
        alt: "Backdrop",
        title: "Backdrop",
        link: "/artworks?type=Backdrop",
    },
    {
        src: img3,
        alt: "Art Gallery",
        title: "Art Gallery",
        link: "/artworks?type=Art Gallery",
    },
];

const Confluence = () => {
    const [ishovered, setIshovered] = useState(false);
    const handleHover = () => {
        setIshovered(true);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="confluence-page">
            <div className="conflue-image">
                <img className="confluence-front" src={img4} alt="confluence" />
            </div>
            <div className="abtconflu">
                <h1>ABOUT CONFLUENCE</h1>
                <p>
                    Laboris exercitation reprehenderit ipsum veniam tempor
                    pariatur excepteur elit et aliquip nulla pariatur proident.
                    Cupidatat commodo commodo nisi irure excepteur incididunt
                    aliquip tempor non sunt in velit ea. Laborum aliqua qui
                    labore aliqua nostrud elit elit dolore. Mollit sit sit
                    tempor magna.
                </p>
            </div>
            <div className="conflue-items">
                {boxes.map((box, index) => (
                    <Link
                        to={box.link}
                        key={index}
                        className="conflue-boxes"
                        onMouseEnter={handleHover}
                        onClick={() => {}}
                    >
                        <img src={box.src} alt={box.alt} />
                        <div className="overlay2">
                            <h1>{box.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="conflue-info">
                <div className="conflue-part">
                    <div className="conflue-part-content event-content">
                        <h1>Events</h1>
                        <p>
                            Non deserunt dolor occaecat amet in anim irure
                            officia veniam consectetur ut. Aliqua Lorem ad non
                            duis. Duis ad pariatur nulla reprehenderit proident
                            cupidatat ut dolor do occaecat eiusmod. Qui velit
                            officia voluptate amet ipsum ullamco sunt ullamco
                            sint aliquip ex. Tempor ullamco incididunt
                            consectetur id labore irure. Sit velit elit proident
                            enim Lorem eu non cillum voluptate quis magna. Nulla
                            quis ut occaecat ut enim eu labore non aliquip
                            laborum qui officia. Exercitation nulla qui aute
                            aliqua dolore officia tempor dolor. Amet non ad
                            aliquip velit.
                        </p>
                        <Link to="/events" className="Webbtn">
                            Events
                        </Link>
                    </div>
                    <div className="conflue-part-image-box">
                        <img src={img2} alt="Events" />
                    </div>
                </div>
                <div className="conflue-part">
                    <div className="conflue-part-image-box">
                        <img src={img1} alt="Backdrop" />
                    </div>
                    <div className="conflue-part-content backdrop-content">
                        <h1>Backdrop</h1>
                        <p>
                            Non deserunt dolor occaecat amet in anim irure
                            officia veniam consectetur ut. Aliqua Lorem ad non
                            duis. Duis ad pariatur nulla reprehenderit proident
                            cupidatat ut dolor do occaecat eiusmod. Qui velit
                            officia voluptate amet ipsum ullamco sunt ullamco
                            sint aliquip ex. Tempor ullamco incididunt
                            consectetur id labore irure. Sit velit elit proident
                            enim Lorem eu non cillum voluptate quis magna. Nulla
                            quis ut occaecat ut enim eu labore non aliquip
                            laborum qui officia. Exercitation nulla qui aute
                            aliqua dolore officia tempor dolor. Amet non ad
                            aliquip velit.
                        </p>
                        <Link to="/artworks?type=backdrop" className="Webbtn">
                            Backdrop
                        </Link>
                    </div>
                </div>
                <div className="conflue-part">
                    <div className="conflue-part-content art-gallery-content">
                        <h1>Art Gallery</h1>
                        <p>
                            Non deserunt dolor occaecat amet in anim irure
                            officia veniam consectetur ut. Aliqua Lorem ad non
                            duis. Duis ad pariatur nulla reprehenderit proident
                            cupidatat ut dolor do occaecat eiusmod. Qui velit
                            officia voluptate amet ipsum ullamco sunt ullamco
                            sint aliquip ex. Tempor ullamco incididunt
                            consectetur id labore irure. Sit velit elit proident
                            enim Lorem eu non cillum voluptate quis magna. Nulla
                            quis ut occaecat ut enim eu labore non aliquip
                            laborum qui officia. Exercitation nulla qui aute
                            aliqua dolore officia tempor dolor. Amet non ad
                            aliquip velit.
                        </p>
                        <Link
                            to="/artworks?type=Art Gallery"
                            className="Webbtn"
                        >
                            Art Gallery
                        </Link>
                    </div>
                    <div className="conflue-part-image-box">
                        <img src={img3} alt="Art Gallery" />
                    </div>
                </div>
            </div>
            <div className="sponsers">
                <Sponsersgrid />
            </div>
        </div>
    );
};

export default Confluence;
