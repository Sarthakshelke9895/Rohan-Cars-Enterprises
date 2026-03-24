import './App.css';
import Cars from './Cars/Cars';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import { useState } from 'react';
import Whychooseus from './Whychooseus/Whychooseus';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import FloatingButtons from './FloatingButtons/FloatingButtons';

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
    <Whychooseus/>
    <Reviews/>
    <Contact/>
    <Footer/>
    <FloatingButtons/>
  
    </div>
    
  );
}

export default App;
