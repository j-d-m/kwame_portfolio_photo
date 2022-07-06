import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Footer from "./components/Footer";
import "./styles/App.css";
import AdminForm from "./components/AdminForm";
import Container from "./context/Container";
function App() {
  return (
    <Container>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/admin" element={<AdminForm />} />
        </Routes>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
