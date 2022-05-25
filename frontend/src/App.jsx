import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Footer from "./components/Footer";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
