import "./App.css";
import NewTrip from "./Components/Itinerary/NewTrip";
import PlanTrip from "./Components/Itinerary/PlanTrip";
import ViewTrip from "./Components/Itinerary/ViewTrip";
import SignUp from "./Components/User/SignUp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new" element={<NewTrip />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/result" element={<ViewTrip />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
