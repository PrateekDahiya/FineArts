import React from "react";
import "../styles/Sponsersgrid.css";
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
    { name: "Hero", image: img1, type: "Sponsor" },
    { name: "Vodafone", image: img2, type: "Sponsor" },
    { name: "Bisleri", image: img3, type: "Sponsor" },
    { name: "Videocon", image: img4, type: "Sponsor" },
    { name: "Nestle", image: img5, type: "Sponsor" },
    { name: "Airtel", image: img6, type: "Sponsor" },
    { name: "Vivo", image: img7, type: "Sponsor" },
    { name: "Gionee", image: img8, type: "Sponsor" },
    { name: "Denver", image: img9, type: "Sponsor" },
    { name: "Indian Oil", image: img10, type: "Sponsor" },
    { name: "NTPC", image: img11, type: "Sponsor" },
    { name: "ISGEC", image: img12, type: "Sponsor" },
    { name: "Umane Society", image: img13, type: "Sponsor" },
    { name: "SBI", image: img14, type: "Sponsor" },
    { name: "PNB", image: img15, type: "Sponsor" },
    { name: "Axis Bank", image: img16, type: "Sponsor" },
    { name: "Red Bull", image: img17, type: "Sponsor" },
    { name: "Cavin Kare", image: img18, type: "Sponsor" },
    { name: "Oppo", image: img19, type: "Sponsor" },
    { name: "Coke Studio", image: img20, type: "Sponsor" },
    { name: "Paytm", image: img21, type: "Sponsor" },
];

const mediaPartners = [
    { name: "Danik Bhaskar", image: img22, type: "Media Partner" },
    { name: "Ajeet Samachar", image: img23, type: "Media Partner" },
    { name: "Yash Babu", image: img24, type: "Media Partner" },
    { name: "Jagat Jyanti", image: img25, type: "Media Partner" },
    { name: "Amar Ujala", image: img26, type: "Media Partner" },
    { name: "Aaj Smaj", image: img27, type: "Media Partner" },
    { name: "Golden Kiran", image: img28, type: "Media Partner" },
];

const Sponsorformat = ({ data }) => (
    <div className="sponsor-grid-container">
        {data.map((sponsor, index) => (
            <div key={index} className="sponsor-grid-item">
                <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    title={sponsor.name}
                    draggable="false"
                />
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
