import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import ImageSlider from "./HomeSlider";
import "../styles/Home.css";
import HomeGrid from "./HomeGrid";
import Glimpses2 from "./Glimpses2";
import Infocards from "./Infocards";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="homepage">
            <div className="homedivs frontimg">
                <ImageSlider />
            </div>
            <div className="homedivs whoweare">
                <div className="whoweare-leftpart">
                    <h1>Who Are We?</h1>
                    <p>
                        The Fine Arts and Modeling Club is a prominent official
                        club at NIT Kurukshetra. It serves as a vibrant hub for
                        artists who converge to enrich and uphold the artistic
                        culture within the college community. By fostering a
                        creative environment, the club offers abundant
                        opportunities for individuals with a passion for art to
                        refine their skills and showcase their talents in
                        various forms of art and craft.
                    </p>
                </div>
                <div className="homegrid">
                    <HomeGrid />
                </div>
            </div>
            <div className="homedivs browseartworks">
                <h1>Browse artworks of FineArts</h1>
                <p>
                    Explore our diverse collection of artworks, featuring
                    stunning pieces from emerging and established artists.
                    Discover paintings, sculptures, and more to find the perfect
                    addition to your collection.
                </p>
                <Link className="Webbtn" to="/artworks">
                    Browse Artworks
                </Link>
            </div>

            <div className="homedivs whatwedo">
                <h1>What We Do?</h1>
                <p className="whatwedo-text">
                    To uphold the goal of preserving the art culture, the Fine
                    Arts and Modelling Club transforms the college campus into a
                    living work of art during fests and events. Here are a few
                    of the notable undertakings and initiatives the club
                    enthusiastically engages in:
                </p>
                <Slider />
            </div>
            <div className="homedivs glimpses">
                <Glimpses2 />
            </div>
            <div className="homedivs whatwedo">
                <h1>Why Join Us?</h1>
                <p className="whatwedo-text">
                    We intend to enkindle that spark of creativity in an
                    individual which is a relish not just for the sake of art
                    but for enjoying its beauty in life. Alongside the hectic
                    schedule that we as engineers have, everyone needs an escape
                    to look into the world in a different way, a better way,
                    that transcends all rationality that we hold. Here, at Fine
                    Arts, we strive for everyone to find their escape into this
                    aesthetic little world of ours.
                </p>
            </div>

            <div className="homedivs secy" id="Allies">
                <h1>Allies</h1>
                <Infocards />
            </div>
        </div>
    );
};

export default Home;
