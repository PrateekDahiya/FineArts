import React from "react";
import "../styles/Glimpses2.css";

import glimpse1 from "../assets/Glimpses/image1.jpg";
import glimpse2 from "../assets/Glimpses/image2.jpeg";
import glimpse3 from "../assets/Glimpses/image3.jpeg";
import glimpse4 from "../assets/Glimpses/image4.jpeg";
import glimpse5 from "../assets/Glimpses/image5.jpeg";
import glimpse6 from "../assets/Glimpses/image6.jpeg";
import glimpse7 from "../assets/Glimpses/image7.jpg";
import glimpse8 from "../assets/Glimpses/image8.jpeg";

const Glimpses2 = () => {
    return (
        <div className="glimpses-outer-container">
            <div className="glimpses-row row1">
                <div className="glimpses-column  col1">
                    <img src={glimpse6} alt="glimpse1" />
                </div>
                <div className="glimpses-column col2">
                    <img src={glimpse2} alt="glimpse1" />
                </div>
                <div className="glimpses-column col1">
                    <h1>MIX MEDIA</h1>
                    <p>
                        Acrylic with graphite, offering a dynamic fusion of
                        texture, depth, and contrast.
                    </p>
                </div>
            </div>
            <div className="glimpses-row row2">
                <div className="glimpses-column col3">
                    <img src={glimpse5} alt="glimpse1" />
                </div>
                <div className="glimpses-column col1">
                    <h1>TRADITIONAL ARTFORMS</h1>
                    <p>
                        Lippan art carries a rich cultural heritage and offer a
                        window into the traditions and craftsmanship of India
                    </p>
                </div>
                <div className="glimpses-column col2">
                    <img src={glimpse3} alt="glimpse1" />
                </div>
            </div>
            <div className="glimpses-row row3">
                <div className="glimpses-column col2">
                    <img src={glimpse7} alt="glimpse1" />
                </div>
                <div className="glimpses-column col3">
                    <img src={glimpse1} alt="glimpse1" />
                </div>
                <div className="glimpses-column col1">
                    <h1>NATURAL HUES</h1>
                    <p>
                        Adding a timeless and organic dimension to artworks,
                        infusing them with the beauty and serenity of natural
                        world
                    </p>
                </div>
            </div>
            <div className="glimpses-row row4">
                <div className="glimpses-column col2">
                    <img src={glimpse4} alt="glimpse1" />
                </div>
                <div className="glimpses-column col1">
                    <h1>NATURAL HUES</h1>
                    <p>
                        Adding a timeless and organic dimension to artworks,
                        infusing them with the beauty and serenity of natural
                        world
                    </p>
                </div>
                <div className="glimpses-column col3">
                    <img src={glimpse8} alt="glimpse1" />
                </div>
            </div>
        </div>
    );
};

export default Glimpses2;
