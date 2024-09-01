import React, { useEffect } from "react";
import "../styles/Events.css";

export const eventData = [
    {
        id: 1,
        title: "Confluence",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image1.jpg`,
        description: "",
    },
    {
        id: 2,
        title: "Art Showcase",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image2.jpg`,
        description: "",
    },
    {
        id: 3,
        title: "Flex: Monkey D. Luffy",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image3.jpg`,
        description: "",
    },
    {
        id: 4,
        title: "Flex: SpiderMan in Spiderverse",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image4.jpg`,
        description: "",
    },
    {
        id: 5,
        title: "3D modal: ISRO Chandrayaan-3",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image5.jpg`,
        description: "",
    },
    {
        id: 6,
        title: "Flex",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image6.jpg`,
        description: "",
    },
    {
        id: 7,
        title: "Art Showcase: Sarthak Mishra",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image7.jpg`,
        description: "",
    },
    {
        id: 8,
        title: "Art ShowCase: Sarthak Mishra",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image8.jpg`,
        description: "",
    },
    {
        id: 9,
        title: "Rangoli Making",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image9.jpg`,
        description: "",
    },
    {
        id: 10,
        title: "Waste-O-Wonder",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image10.jpg`,
        description: "",
    },
    {
        id: 11,
        title: "Origami",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Artgallery/image11.jpg`,
        description: "",
    },
];

const Artgallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <h1>Art Gallery</h1>
            <p>
                We organize an exciting art exhibition where students, and even
                people from outside our college, can showcase their creative
                talents. During Confluence, our college fest, the art gallery
                becomes a popular spot. Even the faculty members visit it with
                great interest. It's a fantastic chance for artists to display
                their work, not just to fellow students but also to our
                supportive and enthusiastic teachers.
            </p>
            <div className="grid">
                {eventData.map((event) => (
                    <div className="event" key={event.id}>
                        <img src={event.imgSrc} alt={event.title} />
                        <div className="description">
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artgallery;
