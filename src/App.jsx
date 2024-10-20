import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";
import OilGas from "./pages/OilGas";
import ViewShipping from "./pages/ViewShipping";
import MarineLogistics from "./pages/MarineLogistics";
import Loading from "./utils/Loading";
import useImageLoader from "./utils/useImageLoader"; // Import the custom hook
import ScrollToTop from "./utils/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const { loading, setLoading } = useImageLoader(); // Use the custom hook

  return (
    <div className="overflow-x-hidden scrollbar-thumb-sky-700 scrollbar-track-sky-300 relative">
      <Router>
        <HelmetProvider>
          <ScrollToTop />
          <Navbar />
          {loading && <Loading />}
          <PageRoutes setLoading={setLoading} />
          <Footer />
        </HelmetProvider>
      </Router>
    </div>
  );
};

const PageRoutes = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Simulating loading time, adjust as needed

    return () => clearTimeout(timer);
    //changes
  }, [location, setLoading]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQs />} />
      <Route path="/oil_gas" element={<OilGas />} />
      <Route path="/view_shipping" element={<ViewShipping />} />
      <Route path="/marine_logistics" element={<MarineLogistics />} />
    </Routes>
  );
};

export default App;
