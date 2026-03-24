import React from "react";
import "./Cars.css";
import arrow from '../Assets/arrow.png'
import swift from '../Assets/Swift-Dzire.jpg'
import ertiga from '../Assets/Ertiga.jpg'
import innova from '../Assets/Innova-Crysta.jpg'
import dzire from '../Assets/Dzire.jpg'
import mercedes from '../Assets/Mercedez-e-class.jpg'
import bmw from '../Assets/BMW.jpg'

import seat from '../Assets/seat.png'
import fuel from '../Assets/fuel.png'
import ruppee from '../Assets/rupee.png'

const Cars = ({ selectedService, onBook }) => {
  

  const carData = {
    local: [
      { id: 1, name: "Swift Dzire", seats: 4, fuel: "Petrol", price: "₹1200/day", image: swift },
      { id: 2, name: "Ertiga", seats: 6, fuel: "Diesel", price: "₹1800/day", image: ertiga }
    ],
    airport: [
      { id: 3, name: "Innova Crysta", seats: 7, fuel: "Diesel", price: "₹2500/day", image: innova },
      { id: 4, name: "Swift Dzire", seats: 4, fuel: "Petrol", price: "₹1200/day", image: dzire }
    ],
    outstation: [
      { id: 5, name: "Innova Crysta", seats: 7, fuel: "Diesel", price: "₹2800/day", image: innova }
    ],
    corporate: [
      { id: 6, name: "Mercedes E-Class", seats: 4, fuel: "Petrol", price: "₹4500/day", image: mercedes }
    ],
    hourly: [
      { id: 7, name: "Swift Dzire", seats: 4, fuel: "Petrol", price: "₹200/hr", image: swift }
    ],
    events: [
      { id: 8, name: "BMW 7 Series", seats: 4, fuel: "Petrol", price: "₹6000/day", image: bmw }
    ]
  }; /* DEFAULT SERVICE */

  const defaultService = {
    id: "local",
    title: "Local City Rides"
  };

  /* SAFE ACTIVE SERVICE */

  const activeService =
    selectedService || defaultService;

  /* SAFE CARS */

  const cars =
    carData[activeService.id] || [];

  return (
    <section id="car" className="cars-section">
      <div className="cars-header">
        <h2>Available Cars for {activeService.title}</h2>
        <p>Choose a car and continue booking.</p>
      </div>

      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="car-details gradient-overlay">
              <div className="card-info">
              <div className="name">
              <h3>{car.name}</h3>
              <div className="info">
                <div className="logo-and-type">
                  <img src={seat} alt="Seats" className="icon-car" />
                  <span>{car.seats} Seats</span>
                </div>
                <div className="logo-and-type">
                  <img src={fuel} alt="Fuel" className="icon-car" />
                  <span>{car.fuel}</span>

                </div>
                <div className="logo-and-type">
                  <img src={ruppee} alt="Price" className="icon-car" />
                  <span>{car.price}</span>
                </div>
              </div>
              </div>


              <button className="book-btn-car" onClick={() => onBook(car)}>
                Book Now
                <img src={arrow} alt="Arrow"  className="arrow3"/>
              </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;