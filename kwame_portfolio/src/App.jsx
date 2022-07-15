import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Footer from "./components/Footer";
import AdminForm from "./components/AdminForm";
import "./styles/App.css";
// import Container from "./context/Container";
// import MobilNav from "./components/MobilNav";
// import { useContext } from "react";
// import { MyContext } from "./context/context";

function App() {
  // const { menuOpen } = useContext(MyContext);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/admin" element={<AdminForm />} />
      </Routes>

      {/* with this option we have error with route {error is  there is no matching route ...}   
      {menuOpen ? (
        <Routes>
          <Route path="/" element={<MobilNav />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/admin" element={<AdminForm />} />
        </Routes>
      )} */}

      {/* <Routes>
        <Route path="/" element={menuOpen ? <MobilNav /> : <Hero />} />
        <Route path="/work" element={menuOpen ? <MobilNav /> : <Work />} />
        <Route
          path="/contact"
          element={menuOpen ? <MobilNav /> : <Contact />}
        />
        <Route path="/policy" element={menuOpen ? <MobilNav /> : <Policy />} />
        <Route path="/admin" element={<AdminForm />} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
