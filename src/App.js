import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Confluence from "./components/Confluence.js";
import Artworks2 from "./components/Artworks2.js";
import Footer from "./components/Footer.js";
import Events from "./components/Events.js";
import Workshops from "./components/Workshops.js";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="nav">
                    <Nav />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/artworks" element={<Artworks2 />} />
                        <Route path="/confluence" element={<Confluence />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/workshops" element={<Workshops />} />
                    </Routes>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
