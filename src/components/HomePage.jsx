import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Custom CSS file
import heroImage from '../assests/EVScooty.jpg';
import logo from '../assests/logo.jpeg';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="container">
            {/* Header */}
            <header className="header sticky-header">
                <div className="logo-container">
                    <img src={logo} alt="Electrovea Logo" className="logo-img" />
                    <div className="logo-text">Electrovea</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="🔍 Search for batteries, services..." className="search-input fancy-search" />
                </div>
                <button className="login-btn styled-login">Login / Signup</button>
            </header>

            {/* Headline Section */}
            <section className="headline-section" style={{ marginBottom: "10px", padding: "10px 0" }}>
                <h1 className="headline" style={{ margin: 0 }}>Replace your old EV battery in 30 mins</h1>
            </section>
            {/* Hero Image Section */}
            <section className="hero-section">
                <img
                    src={heroImage}
                    alt="EV Battery Hero"
                    className="hero-image-full"
                    style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
                />
            </section>

            {/* Subtext Section */}
            <section className="subtext-section headline-section">
                <p className="subtext"><strong style={{ fontSize: "1.25rem" }}>Get a new battery installed at home for an instant discount.</strong></p>
            </section>

            {/* Action Buttons */}
            <section className="button-section">
                <div className="button-wrapper">
                    <button className="action-btn" onClick={() => navigate("/check-battery")}>Check My Battery Now</button>
                    <button className="action-btn">Choose Replacement Battery</button>
                    <button className="action-btn">Swap Now</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" style={{ backgroundColor: "#e7eeea", padding: "20px", marginTop: "40px" }}>
                <p style={{ fontWeight: "bold", color: "#2f4f4f" }}>
                    🌿 Every battery you trade-in is recycled responsibly.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "10px" }}>
                    <div>
                        <p><a href="#about">About Us</a></p>
                        <p><a href="#faqs">FAQs</a></p>
                        <p><a href="#terms">Terms & Conditions</a></p>
                        <p><a href="mailto:preyassilare@gmail.com">Contact Support</a></p>
                    </div>
                    <div>
                        <p>📞 <a href="tel:+919322441376">+91-9322441376</a></p>
                        <p>📧 <a href="mailto:preyassilare@gmail.com">preyassilare@gmail.com</a></p>
                        <div>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
                            <a href="https://wa.me/919322441376" target="_blank" rel="noopener noreferrer"> WhatsApp</a> |
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
