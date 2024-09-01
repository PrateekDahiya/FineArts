import React, { useEffect } from "react";
import "../styles/Events.css";

export const eventData = [
    {
        id: 1,
        title: "Sketching Workshop",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Workshops/image1.jpg`,
        description:
            "Learn shading, perspective, and proportion. Practice with still life and landscapes, guided by live demos and personalized feedback. All materials provided. Connect with fellow artists and improve your skills.",
    },
    {
        id: 2,
        title: "Painting Workshop",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Workshops/image2.jpg`,
        description:
            "Explore color theory, brushwork, and composition with acrylics, oils, and watercolors. Hands-on exercises, live demos, and personalized feedback. All materials provided. Enhance your creativity in a supportive setting.",
    },
    {
        id: 3,
        title: "Calligraphy Workshop",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Workshops/image3.jpg`,
        description:
            "Master the basics of beautiful writing, including strokes and letter formation. Practice different styles with expert guidance and personalized feedback. All materials provided. Join a creative community and refine your skills.",
    },
    {
        id: 4,
        title: "Madhubani Art Workshop",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Workshops/image4.jpg`,
        description:
            "Discover the traditional art of Madhubani with hands-on practice and expert guidance. Learn intricate line work and motifs. Personalized feedback and all materials provided. Connect with a supportive artistic community.",
    },
    {
        id: 5,
        title: "Rangoli Making Workshop",
        imgSrc: `${process.env.PUBLIC_URL}/assets/Workshops/image5.jpg`,
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
                A chance of learning from the scratch.The Fine Arts club of
                Nitkkr actively works on the Confluence time that conducts the
                workshops includes Rangoli making, Mandal art, Calligraphy ,
                Sketching,Madhubani art to make students actively participate in
                the workshop to learn and love the passion even more and the
                club members of Fine-Arts takes care of every individual to
                enhance their artistic skills where everyone are provided with
                the requirements for the art.
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
