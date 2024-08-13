import React, { useEffect } from "react";
import "../styles/Events.css";

export const eventData = [
    {
        id: 1,
        title: "Sketching Workshop",
        imgSrc: "https://res.cloudinary.com/drnrsxnx9/image/upload/v1721480237/FineArts/tmp-2-1721480185053_h3vx0c.jpg",
        description:
            "Learn shading, perspective, and proportion. Practice with still life and landscapes, guided by live demos and personalized feedback. All materials provided. Connect with fellow artists and improve your skills.",
    },
    {
        id: 2,
        title: "Painting Workshop",
        imgSrc: "https://res.cloudinary.com/drnrsxnx9/image/upload/v1721550644/FineArts/tmp-1-1721550589724_o3h7es.jpg",
        description:
            "Explore color theory, brushwork, and composition with acrylics, oils, and watercolors. Hands-on exercises, live demos, and personalized feedback. All materials provided. Enhance your creativity in a supportive setting.",
    },
    {
        id: 3,
        title: "Calligraphy Workshop",
        imgSrc: "https://res.cloudinary.com/drnrsxnx9/image/upload/v1721550912/FineArts/tmp-2-1721550858097_lgdjk4.jpg",
        description:
            "Master the basics of beautiful writing, including strokes and letter formation. Practice different styles with expert guidance and personalized feedback. All materials provided. Join a creative community and refine your skills.",
    },
    {
        id: 4,
        title: "Madhubani Art Workshop",
        imgSrc: "https://res.cloudinary.com/drnrsxnx9/image/upload/v1721551048/FineArts/tmp-3-1721550993654_crpuz4.jpg",
        description:
            "Discover the traditional art of Madhubani with hands-on practice and expert guidance. Learn intricate line work and motifs. Personalized feedback and all materials provided. Connect with a supportive artistic community.",
    },
    {
        id: 5,
        title: "Rangoli Making Workshop",
        imgSrc: "https://res.cloudinary.com/drnrsxnx9/image/upload/v1721551194/FineArts/tmp-4-1721551140014_j2zj64.jpg",
        description:
            "Learn the art of Rangoli with traditional techniques and designs. Create your own Rangoli with hands-on practice, live demos, and personalized feedback. All materials provided. Enhance your skills in a creative and supportive environment.",
    },
];

const Workshops = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <h1>Workshops</h1>
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

export default Workshops;
