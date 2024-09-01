import React, { useEffect } from "react";
import "../styles/Events.css";

export const eventData = [
    {
        id: 1,
        title: "Rangoli Making",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image1.jpg`,
        description: "Flagship Event to Design vibrant floor art.",
    },
    {
        id: 2,
        title: "Art-a-Thon",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image2.jpg`,
        description:
            "Flagship event to push creative limits using level-based competition.",
    },
    {
        id: 3,
        title: "Mandala Making",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image3.jpg`,
        description: "Using geometric patterns to create art.",
    },
    {
        id: 4,
        title: "Nail Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image4.jpg`,
        description: "Art on your fingertips.",
    },
    {
        id: 5,
        title: "Calligraphy",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image5.jpg`,
        description: "Event to showcase Calligraphy talent.",
    },
    {
        id: 6,
        title: "Blow Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image6.jpg`,
        description: "Event to create art with air and color.",
    },
    {
        id: 7,
        title: "Clay Modeling",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image7.jpg`,
        description: "Event to create wonders with clay.",
    },
    {
        id: 8,
        title: "Pot Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image8.jpg`,
        description: "Pots transformed into art.",
    },
    {
        id: 9,
        title: "Origami",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image9.jpg`,
        description: "Event to make art using folded paper.",
    },
    {
        id: 10,
        title: "Abstract Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image10.jpg`,
        description: "Event to reflect colours speak louder than words.",
    },
    {
        id: 11,
        title: "Monochromatic Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image11.jpg`,
        description: "Using a Single colour to make endless art.",
    },
    {
        id: 12,
        title: "Digital Canvas",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image12.jpg`,
        description: "Event that let your creativity flow digitally.",
    },
    {
        id: 13,
        title: "Let’s Ink It",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image13.jpg`,
        description: "Event to unleash your creativity with a pen.",
    },
    {
        id: 14,
        title: "Tattoo Making",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image14.jpg`,
        description: "Express yourself with tattoos.",
    },
    {
        id: 15,
        title: "Comic Strip",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image15.jpg`,
        description: "Making comic strips where every frame tells a tale.",
    },
    {
        id: 16,
        title: "Face Painting",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image16.jpg`,
        description: "Event that allows you to paint your dreams on face.",
    },
    {
        id: 17,
        title: "Live Sketching",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image17.jpg`,
        description: "This event involves capturing the moment with colors.",
    },
    {
        id: 18,
        title: "Waste-o-Wonder",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Events/image18.jpg`,
        description:
            "This involves creating something extraordinary with waste.",
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
                Our Fine Arts events showcase a variety of artistic expressions,
                from face painting and comic strip creation to abstract painting
                and clay modeling. Each event is designed to inspire creativity
                and innovation, allowing participants to explore different
                mediums and techniques. With activities like live sketching,
                tattoo making, and waste-to-wonder creations, attendees can
                discover new ways to express themselves artistically. These
                events provide a vibrant platform for both seasoned artists and
                beginners to showcase their talents and connect with a community
                of art enthusiasts.
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
