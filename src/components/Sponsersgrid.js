import React from "react";
import "../styles/Sponsersgrid.css"; // Import the CSS file for styling
import img1 from "../assets/Sponsers/image1.png";
import img2 from "../assets/Sponsers/image2.png";
import img3 from "../assets/Sponsers/image3.png";
import img4 from "../assets/Sponsers/image4.png";
import img5 from "../assets/Sponsers/image5.png";
import img6 from "../assets/Sponsers/image6.png";
import img7 from "../assets/Sponsers/image7.png";
import img8 from "../assets/Sponsers/image8.png";
import img9 from "../assets/Sponsers/image9.png";
import img10 from "../assets/Sponsers/image10.png";
import img11 from "../assets/Sponsers/image11.png";
import img12 from "../assets/Sponsers/image12.png";
import img13 from "../assets/Sponsers/image13.png";
import img14 from "../assets/Sponsers/image14.png";
import img15 from "../assets/Sponsers/image15.png";
import img16 from "../assets/Sponsers/image16.png";
import img17 from "../assets/Sponsers/image17.png";
import img18 from "../assets/Sponsers/image18.png";
import img19 from "../assets/Sponsers/image19.png";
import img20 from "../assets/Sponsers/image20.png";
import img21 from "../assets/Sponsers/image21.png";
import img22 from "../assets/Sponsers/image22.png";
import img23 from "../assets/Sponsers/image23.png";
import img24 from "../assets/Sponsers/image24.png";
import img25 from "../assets/Sponsers/image25.png";
import img26 from "../assets/Sponsers/image26.png";
import img27 from "../assets/Sponsers/image27.png";
import img28 from "../assets/Sponsers/image28.png";

const sponsors = [
    { name: "Sponsor1", image: img1, type: "Sponsor" },
    { name: "Sponsor2", image: img2, type: "Sponsor" },
    { name: "Sponsor3", image: img3, type: "Sponsor" },
    { name: "Sponsor4", image: img4, type: "Sponsor" },
    { name: "Sponsor5", image: img5, type: "Sponsor" },
    { name: "Sponsor6", image: img6, type: "Sponsor" },
    { name: "Sponsor7", image: img7, type: "Sponsor" },
    { name: "Sponsor8", image: img8, type: "Sponsor" },
    { name: "Sponsor9", image: img9, type: "Sponsor" },
    { name: "Sponsor10", image: img10, type: "Sponsor" },
    { name: "Sponsor11", image: img11, type: "Sponsor" },
    { name: "Sponsor12", image: img12, type: "Sponsor" },
    { name: "Sponsor13", image: img13, type: "Sponsor" },
    { name: "Sponsor14", image: img14, type: "Sponsor" },
    { name: "Sponsor15", image: img15, type: "Sponsor" },
    { name: "Sponsor16", image: img16, type: "Sponsor" },
    { name: "Sponsor17", image: img17, type: "Sponsor" },
    { name: "Sponsor18", image: img18, type: "Sponsor" },
    { name: "Sponsor19", image: img19, type: "Sponsor" },
    { name: "Sponsor20", image: img20, type: "Sponsor" },
    { name: "Sponsor21", image: img21, type: "Sponsor" },
];

const mediaPartners = [
    { name: "MediaPartner1", image: img22, type: "Media Partner" },
    { name: "MediaPartner2", image: img23, type: "Media Partner" },
    { name: "MediaPartner3", image: img24, type: "Media Partner" },
    { name: "MediaPartner4", image: img25, type: "Media Partner" },
    { name: "MediaPartner5", image: img26, type: "Media Partner" },
    { name: "MediaPartner6", image: img27, type: "Media Partner" },
    { name: "MediaPartner7", image: img28, type: "Media Partner" },
];

const Sponsorformat = ({ data }) => (
    <div className="sponsor-grid-container">
        {data.map((sponsor, index) => (
            <div key={index} className="sponsor-grid-item">
                <img src={sponsor.image} alt={sponsor.name} draggable="false" />
            </div>
        ))}
    </div>
);

const Sponsersgrid = () => (
    <div className="sponser-box">
        <h1>Sponsors</h1>
        <Sponsorformat data={sponsors} />
        <h1>Media Partners</h1>
        <Sponsorformat data={mediaPartners} />
    </div>
);

export default Sponsersgrid;
