import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spatreatments from "./pages/Spatreatments";
import LiveChat from "./components/LiveChat";
import { RoomProvider } from "./RoomProvider";
import QuestionnairePage from "./pages/QuestionnairePage";

function App() {
  return (
    <Router>
      <Navbar />
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Spatreatments" element={<Spatreatments />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </RoomProvider>
      <LiveChat />
      <Footer />
    </Router>
  );
}

export default App;
