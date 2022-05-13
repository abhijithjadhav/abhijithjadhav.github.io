import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Blogs from "./Component/Blogs";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Skills width='50%' />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

// function App({ Component, pageProps }) {
//   return (
//     <Carousel />
//   );
// }

export default App;
