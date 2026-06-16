import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Inspo from "./pages/Inspo";
import Plan from "./pages/Plan";
import VendorDetails from "./pages/VendorDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/inspo" element={<Inspo />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;