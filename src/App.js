import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/Routes/AllRooutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}
