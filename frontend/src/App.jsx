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
import MobilNav from "./components/MobilNav";
import { useContext } from "react";
import { MyContext } from "./context/context";

function App() {
  const { menuOpen } = useContext(MyContext);

  return (
    // <Container>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={!menuOpen ? <Hero /> : <MobilNav />} />
        <Route path="/work" element={!menuOpen ? <Work /> : <MobilNav />} />
        <Route
          path="/contact"
          element={!menuOpen ? <Contact /> : <MobilNav />}
        />
        <Route path="/policy" element={!menuOpen ? <Policy /> : <MobilNav />} />
        <Route path="/admin" element={<AdminForm />} />
      </Routes>
      <Footer />
    </div>
    // </Container>
  );
}

export default App;
