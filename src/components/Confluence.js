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
        link: "/artgallery",
    },
];

const Confluence = () => {
    const [ishovered, setIshovered] = useState(false);
    const handleHover = () => {
        setIshovered(true);
    };
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="confluence-page">
            <div className="conflue-image">
                <img className="confluence-front" src={img4} alt="confluence" />
            </div>
            <div className="abtconflu">
                <h1>ABOUT CONFLUENCE</h1>
                <p>
                    Confluence is the annual cultural festival of NIT
                    Kurukshetra, and it is one of the most awaited cultural
                    festivals in India. It is a cultural extravaganza beyond
                    words, beyond description. Confluence is the coming together
                    of free spirits, like-minded zealous youth and a celebration
                    of culture of true artistic genius. Its urge to deliver the
                    maximum is what makes it one of the most awaited cultural
                    festival.
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
                            Our Fine Arts events showcase a variety of artistic
                            expressions, from face painting and comic strip
                            creation to abstract painting and clay modeling.
                            Each event is designed to inspire creativity and
                            innovation, allowing participants to explore
                            different mediums and techniques. With activities
                            like live sketching, tattoo making, and
                            waste-to-wonder creations, attendees can discover
                            new ways to express themselves artistically. These
                            events provide a vibrant platform for both seasoned
                            artists and beginners to showcase their talents and
                            connect with a community of art enthusiasts.
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
                            Every year, during the much-anticipated Confluence,
                            the annual cultural fest at NIT Kurukshetra, the
                            dedicated members of the Fine Arts and Modelling
                            Club embark on a month-long project to create a
                            massive canvas painting that will adorn the backdrop
                            of the Open-Air Theatre, leaving a lasting
                            impression on all who attend the fest. This truly
                            showcases the commitment of the club members.
                        </p>
                        <Link to="/artworks?type=Backdrop" className="Webbtn">
                            Backdrop
                        </Link>
                    </div>
                </div>
                <div className="conflue-part">
                    <div className="conflue-part-content art-gallery-content">
                        <h1>Art Gallery</h1>
                        <p>
                            We organize an exciting art exhibition where
                            students, and even people from outside our college,
                            can showcase their creative talents. During
                            Confluence, our college fest, the art gallery
                            becomes a popular spot. Even the faculty members
                            visit it with great interest. It's a fantastic
                            chance for artists to display their work, not just
                            to fellow students but also to our supportive and
                            enthusiastic teachers.
                        </p>
                        <Link to="/artgallery" className="Webbtn">
                            Art Gallery
                        </Link>
                    </div>
                    <div className="conflue-part-image-box">
                        <img src={img3} alt="Art Gallery" />
                    </div>
                </div>
            </div>
            <div className="sponsers" id="Sponsors">
                <Sponsersgrid />
            </div>
        </div>
    );
};

export default Confluence;
