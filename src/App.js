import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import SearchPage from "./components/SearchPage";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SPA from "./pages/SPA";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LiveChat from "./components/LiveChat";

import { RoomProvider } from "./RoomProvider";

function App() {
  return (
    <Router>
      <Navbar />
      <RoomProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spa" element={<SPA />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </RoomProvider>
      <LiveChat />
      <Footer />
    </Router>
  );
}

export default App;
