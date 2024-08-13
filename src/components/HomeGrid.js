import React from "react";
import "../styles/HomeGrid.css"; // Import the CSS file for styling
import img1 from "../assets/homegrid/image1.jpeg";
import img2 from "../assets/homegrid/image2.jpeg";
import img3 from "../assets/homegrid/image3.jpg";
import img4 from "../assets/homegrid/image4.jpeg";
import img5 from "../assets/homegrid/image5.jpeg";
import img6 from "../assets/homegrid/image6.jpg";
import img7 from "../assets/homegrid/image7.jpeg";
import img8 from "../assets/homegrid/image8.jpeg";

const HomeGrid = () => {
    return (
        <div className="grid-container">
            <div></div>
            <div className="grid-item topimg">
                <img src={img1} alt="Image 1" draggable="false" />
            </div>
            <div></div>
            <div></div>
            <div className="grid-item botimg">
                <img src={img2} alt="Image 2" draggable="false" />
            </div>
            <div className="grid-item bigimg">
                <img src={img3} alt="Image 3" draggable="false" />
            </div>
            <div className="grid-item topimg">
                <img src={img4} alt="Image 4" draggable="false" />
            </div>
            <div></div>
            <div></div>
            <div className="grid-item botimg">
                <img src={img5} alt="Image 5" draggable="false" />
            </div>
            <div className="grid-item bigimg">
                <img src={img6} alt="Image 6" draggable="false" />
            </div>
            <div className="grid-item topimg">
                <img src={img7} alt="Image 7" draggable="false" />
            </div>
            <div></div>
            <div></div>
            <div className="grid-item botimg">
                <img src={img8} alt="Image 8" draggable="false" />
            </div>
            <div></div>
        </div>
    );
};

export default HomeGrid;
