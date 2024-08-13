import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import { Link } from "react-router-dom";
import "../styles/Slider.css";

import img1 from "../assets/Slider/image6.jpg";
import img2 from "../assets/Slider/image1.png";
import img3 from "../assets/Slider/image4.jpg";
import img4 from "../assets/Slider/image2.jpg";
import img5 from "../assets/Slider/image5.jpeg";
import img6 from "../assets/Slider/image3.jpeg";

const Slider = () => {
    const slides = [
        {
            src: img1,
            alt: "Wall Paintings",
            title: "Wall Paintings",
            description:
                "We display our art to the whole campus by creating artwork, such as murals and street art on the campus walls.",
            link: "/artworks?type=Wall Painting",
        },
        {
            src: img2,
            alt: "Backdrops",
            title: "Backdrop",
            description:
                "We create backdrops for various events and competitions held on campus.",
            link: "/artworks?type=Backdrop",
        },
        {
            src: img3,
            alt: "Anamorphic Art",
            title: "Anamorphic Art",
            description:
                "We create anamorphic art on the campus floors and walls to create optical illusions.",
        },
        {
            src: img4,
            alt: "Flex Banners",
            title: "Flex Banners",
            description:
                "We create flex banners for various events and competitions held on campus.",
            link: "/artworks?type=Wall Painting",
        },
        {
            src: img5,
            alt: "Workshops",
            title: "Workshops",
            description:
                "We conduct workshops on various art forms to promote art in the campus.",
            link: "/workshops",
        },
        {
            src: img6,
            alt: "Events",
            title: "Events",
            description:
                "We conduct various events and competitions to promote art in the campus.",
            link: "/events",
        },
    ];

    useEffect(() => {
        const carouselElement = document.querySelector("#carouselExample");
        const carousel = new Carousel(carouselElement, {
            interval: 2000,
            wrap: true,
        });
    }, []);

    return (
        <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div
                className="carousel-inner"
                style={{ maxWidth: "75vw", margin: "auto" }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === 0 ? "active" : ""
                        }`}
                    >
                        <img
                            src={slide.src}
                            className="d-block w-100"
                            alt={slide.alt}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                            {slide.link && (
                                <Link to={slide.link} className="Webbtn">
                                    View More
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;
