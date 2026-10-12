import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Highlights from "./Highlights/Highlights";
import Amenities from "./Aminities/Aminities";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import BlockDetail from "./BlockDetail/BlockDetail";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component to handle scrolling when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Amenities />
    </main >
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/block/:id" element={<BlockDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
