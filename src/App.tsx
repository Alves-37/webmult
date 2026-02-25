import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
