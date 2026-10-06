import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollManager from "./Components/ScrollManager";
import SectionFollow from "./Sections/SectionFollow";
import Home from "./pages/Home";
import VehiclePage from "./pages/VehiclePage";

function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculos/:slug" element={<VehiclePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SectionFollow />
      <Footer />
    </>
  );
}

export default App;
