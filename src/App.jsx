import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Banner></Banner>
      <div className="max-w-5xl mx-auto">
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;