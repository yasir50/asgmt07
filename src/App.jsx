import "./App.css";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./navbar";
function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <h2 className="smartPhones">SmartPhones</h2>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
