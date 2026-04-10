import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />
        <CTA />
      <Story />
      <Pillars />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
