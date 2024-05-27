import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import SearchPage from "./components/SearchPage";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
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
          <Route path="*" element={<Error />} />
        </Routes>
      </RoomProvider>
    </Router>
  );
}

export default App;
