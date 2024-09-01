import React, { useState } from "react";
import "../styles/Infocards.css";

const infocardData = [
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720876178/FineArts/tmp-1-1720876148596_kzhqmz.jpg",
        name: "Priyanka",
        position: "Secretary",
        year: 2021,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720876304/FineArts/tmp-1-1720876274548_kcgwvu.jpg",
        name: "Rachit",
        position: "Secretary",
        year: 2021,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720876351/FineArts/tmp-2-1720876319860_ptwwiv.jpg",
        name: "Sparsh",
        position: "Secretary",
        year: 2021,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720876385/FineArts/tmp-3-1720876356339_agib7d.jpg",
        name: "Yash Mittal",
        position: "Secretary",
        year: 2021,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720880716/FineArts/tmp-4-1720880681020_qjauyc.jpg",
        name: "Chetan Verma",
        position: "Secretary",
        year: 2022,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881057/FineArts/tmp-5-1720881025242_p38mmf.jpg",
        name: "Gourav Saini",
        position: "Secretary",
        year: 2022,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881111/FineArts/tmp-6-1720881080114_awdzna.jpg",
        name: "Harshit Azad",
        position: "Secretary",
        year: 2022,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881173/FineArts/tmp-7-1720881141281_unitxo.jpg",
        name: "Radhika Chaudhari",
        position: "Secretary",
        year: 2022,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881833/FineArts/tmp-8-1720881801842_wxvy1r.jpg",
        name: "Bharat",
        position: "Secretary",
        year: 2023,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881894/FineArts/tmp-9-1720881864257_l84wzj.jpg",
        name: "Muskan",
        position: "Secretary",
        year: 2023,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881955/FineArts/tmp-10-1720881918632_uhhm2d.png",
        name: "Naved Ali",
        position: "Secretary",
        year: 2023,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720881994/FineArts/tmp-11-1720881964232_i3ja07.jpg",
        name: "Yashwant Raj",
        position: "Secretary",
        year: 2023,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720882344/FineArts/tmp-12-1720882310237_kebuec.jpg",
        name: "Adarsh Mishra",
        position: "Secretary",
        contact: "+91 8707650472",
        email: "12111115@nitkkr.ac.in",
        year: 2024,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720882627/FineArts/tmp-13-1720882595443_g1raux.jpg",
        name: "Gaurav Saini",
        position: "Secretary",
        contact: "+91 8295739907",
        email: "12115114@nitkkr.ac.in",
        year: 2024,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720882700/FineArts/tmp-14-1720882669539_xuk97b.jpg",
        name: "Sakshi Saxena",
        position: "Secretary",
        contact: "+91 9140536796",
        email: "12115073@nitkkr.ac.in",
        year: 2024,
    },
    {
        profile:
            "https://res.cloudinary.com/drnrsxnx9/image/upload/v1720882851/FineArts/tmp-15-1720882820366_rtm8ye.jpg",
        name: "Dhanush Rathod",
        position: "Secretary",
        contact: "+91 8522857065",
        email: "12116149@nitkkr.ac.in",
        year: 2024,
    },
];

const Infocards = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [yearFilter, setYearFilter] = useState("2024");

    const handleYearChange = (event) => {
        setYearFilter(event.target.value);
    };

    // Extract unique years from the infocardData
    const uniqueYears = [...new Set(infocardData.map((card) => card.year))];

    const filteredCards = infocardData.filter((card) =>
        yearFilter ? card.year.toString() === yearFilter : true
    );

    return (
        <div className="infocards-container">
            <div className="filter">
                <select
                    value={yearFilter}
                    onChange={handleYearChange}
                    className="year-select"
                >
                    {uniqueYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="infocards">
                {filteredCards.map((card, index) => (
                    <div
                        className="infocard"
                        key={index}
                        onMouseEnter={() => {
                            setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                            setHoveredIndex(null);
                        }}
                    >
                        <img
                            className={`infocard-profile ${
                                hoveredIndex === index ? "hovered-img" : ""
                            }`}
                            src={card.profile}
                            alt={card.name}
                        />
                        <div className="infos">
                            <h2 className="infocard-name">{card.name}</h2>
                            <p className="infocard-position">{card.position}</p>
                            <p className="infocard-contact">{card.contact}</p>
                            <p className="infocard-email">{card.email}</p>
                            <p className="infocard-year">{card.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infocards;
