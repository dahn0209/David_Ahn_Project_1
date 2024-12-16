import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SubmitTicketPage from "./pages/SubmitTicketPage";
import TicketListPage from "./pages/TicketListPage";
import ManagerDashboardPage from "./pages/ManagerDashboardPage";
import Navbar from "./components/Navbar";

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Employee Routes */}
        <Route path="/submit-ticket" element={<SubmitTicketPage />} />
        <Route path="/my-tickets" element={<TicketListPage />} />

        {/* Manager Routes */}
        <Route path="/manager-dashboard" element={<ManagerDashboardPage />} />

        {/* Default Route */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

