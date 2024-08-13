import React, { useEffect } from "react";
import "../styles/Events.css";

export const eventData = [
    {
        id: 1,
        title: "Abstract Painting",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690563197/finearts/nhubo26ob6kh1lg3xyvt.jpg",
        description:
            "Abstract Painting event with various styles and techniques. Explore creativity and modern art expressions.",
    },
    {
        id: 2,
        title: "Face Painting",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690563151/finearts/fj7tbios58nngbpcxi18.jpg",
        description:
            "Face Painting event where participants create beautiful and artistic designs on faces.",
    },
    {
        id: 3,
        title: "Paint Without Brush",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690562795/finearts/bybahaklgbjkwlfudovx.jpg",
        description:
            "Explore creative painting techniques without using traditional brushes.",
    },
    {
        id: 4,
        title: "Mask Making",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690563179/finearts/ydabqnjltjaebxldgh8a.jpg",
        description:
            "Learn the art of mask making with hands-on practice and creative designs.",
    },
    {
        id: 5,
        title: "Origami Exhibition",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690562844/finearts/hrnc71wcgomvzooajsbd.jpg",
        description:
            "Explore the intricate art of Origami with various paper-folding techniques on display.",
    },
    {
        id: 6,
        title: "News Paper Collage",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690562756/finearts/aly7h3h0c9gjyw1curqc.jpg",
        description:
            "Create art using newspaper clippings to make creative and engaging collages.",
    },
    {
        id: 7,
        title: "Comic Strip",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690563047/finearts/la2wdzs7we9audawjhv0.jpg",
        description:
            "Learn and create your own comic strips, exploring storytelling through visuals.",
    },
    {
        id: 8,
        title: "Art A thon",
        imgSrc: "https://res.cloudinary.com/dbgmmzvlh/image/upload/v1690563220/finearts/fretyxaw04mfitnl8ae3.jpg",
        description:
            "An all-day event dedicated to various forms of art, featuring workshops, displays, and interactive sessions.",
    },
];

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <h1>Events</h1>
            <p>
                Broadly speaking, four main events are conducted throughout the
                year, which involve active participation from the Fine Arts
                Club. These include Freshers' Nite, Antaragni, Galaxy, and
                Artefact. Apart from these main events, various small-scale
                events are also conducted by the Fine Arts Club to promote art
                in the campus.
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

export default Events;
