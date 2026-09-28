import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Riders from './components/Riders';
import Gear from './components/Gear';
import Races from './components/Races';
import Shop from './components/Shop';
import Partner from './components/Partner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { visible } from './content';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {visible.riders && <Riders />}
        <Gear />
        <Races />
        {visible.shop && <Shop />}
        <Partner />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
