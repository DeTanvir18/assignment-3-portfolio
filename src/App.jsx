import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { BallTriangle } from "react-loader-spinner";


const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <>
      {
        loading ?
          <div className="bg-slate-900 h-screen flex justify-center items-center">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#fa19ef"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
          :
          <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <div className="max-w-5xl mx-auto">
              <Services></Services>
              <Projects></Projects>
              <Contact></Contact>
            </div>
            <Footer></Footer>
          </div>
      }
    </>

  );
};

export default App;