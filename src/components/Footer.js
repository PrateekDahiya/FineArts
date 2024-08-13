import React from "react";
import "../styles/Footer.css";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Fine Arts</h2>
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
                    <div className="social-media">
                        <a href="#">
                            <i className="bx bxl-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="bx bxl-instagram-alt"></i>
                        </a>
                        <a href="#">
                            <i className="bx bxl-youtube"></i>
                        </a>
                        <a href="#">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
