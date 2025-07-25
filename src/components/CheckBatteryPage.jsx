import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import EV1 from '../assests/EV1.jpeg';
import EV2 from '../assests/EV2.jpeg';
import EV3 from '../assests/EV3.jpeg';
import EV4 from '../assests/EV4.jpeg';
import EV5 from '../assests/EV5.jpeg';

const batteryCards = [
    {
        id: 1,
        image: EV1,
        dateOfSale: "2023-01-15",
        durationOfUse: "1.5 Years",
        distanceTravelled: "15,000 km"
    },
    {
        id: 2,
        image: EV2,
        dateOfSale: "2022-06-10",
        durationOfUse: "2 Years",
        distanceTravelled: "22,000 km"
    },
    {
        id: 3,
        image: EV3,
        dateOfSale: "2023-03-20",
        durationOfUse: "1 Year",
        distanceTravelled: "9,000 km"
    },
    {
        id: 4,
        image: EV4,
        dateOfSale: "2022-12-01",
        durationOfUse: "2.5 Years",
        distanceTravelled: "25,000 km"
    },
    {
        id: 5,
        image: EV5,
        dateOfSale: "2023-06-05",
        durationOfUse: "8 Months",
        distanceTravelled: "6,000 km"
    }
];

export default function CheckBatteryPage() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="check-header-wrapper">
                <h2 className="check-header">
                    Battery Health Check Records
                </h2>
            </div>
            <div className="info-cards">
                {batteryCards.map(card => (
                    <div className="card" key={card.id}>
                        <img
                            src={card.image}
                            alt="Battery"
                            style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px" }}
                        />
                        <h3 className="card-title">Date of Sale: {card.dateOfSale}</h3>
                        <p className="card-subtext">Duration of Use: {card.durationOfUse}</p>
                        <p className="card-subtext">Distance Travelled: {card.distanceTravelled}</p>
                    </div>
                ))}
            </div>
            <div className="check-controls">
                <button className="back-home-btn" onClick={() => navigate("/")}>Back to Home</button>
            </div>
        </div>
    );
}
