import './App.css';
import Cars from './Cars/Cars';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import { useState } from 'react';

function App() {
     const [selectedService, setSelectedService] = useState(null);
    const handleBook = (car) => {
      const message = `Hi, I want to book ${car.name} for ${selectedService.title} service.`;
      window.open(`https://wa.me/918767143132?text=${encodeURIComponent(message)}`);
    };
  return (
   <div className='Hello'>
    <Navbar/>
    <Hero/>
    <Services onSelectService={setSelectedService} />
    <Cars selectedService={selectedService}  onBook={handleBook}/>
  
    </div>
    
  );
}

export default App;
