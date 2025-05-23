import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Success from "./pages/Success";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
