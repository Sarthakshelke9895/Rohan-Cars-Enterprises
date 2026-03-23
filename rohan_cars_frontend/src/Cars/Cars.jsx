import React from "react";
import "./Cars.css";

const Cars = ({ selectedService, onBook }) => {
  if (!selectedService) return null;

  const carData = {
    local: [
      { id: 1, name: "Swift Dzire", seats: 4, fuel: "Petrol", price: "₹1200/day", image: "/assets/cars/swift.jpg" },
      { id: 2, name: "Ertiga", seats: 6, fuel: "Diesel", price: "₹1800/day", image: "/assets/cars/ertiga.jpg" }
    ],
    airport: [
      { id: 3, name: "Innova Crysta", seats: 7, fuel: "Diesel", price: "₹2500/day", image: "/assets/cars/innova.jpg" },
      { id: 4, name: "Dzire", seats: 4, fuel: "Petrol", price: "₹1200/day", image: "/assets/cars/dzire.jpg" }
    ],
    outstation: [
      { id: 5, name: "Innova Crysta", seats: 7, fuel: "Diesel", price: "₹2800/day", image: "/assets/cars/innova2.jpg" }
    ],
    corporate: [
      { id: 6, name: "Mercedes E-Class", seats: 4, fuel: "Petrol", price: "₹4500/day", image: "/assets/cars/mercedes.jpg" }
    ],
    hourly: [
      { id: 7, name: "Swift Dzire", seats: 4, fuel: "Petrol", price: "₹200/hr", image: "/assets/cars/swift.jpg" }
    ],
    events: [
      { id: 8, name: "BMW 7 Series", seats: 4, fuel: "Petrol", price: "₹6000/day", image: "/assets/cars/bmw.jpg" }
    ]
  };

  const cars = carData[selectedService.id] || [];

  return (
    <section id="cars" className="cars-section">
      <div className="cars-header">
        <h2>Available Cars for {selectedService.title}</h2>
        <p>Choose a car and continue booking.</p>
      </div>

      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="car-details">
              <h3>{car.name}</h3>
              <p>Seats: {car.seats}</p>
              <p>Fuel: {car.fuel}</p>
              <p className="car-price">{car.price}</p>
              <button className="book-btn" onClick={() => onBook(car)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;