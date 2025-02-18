import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dasboard";
import CreditMonitoring from "./components/CreditMonitoring";
import ProtectedRoute from "./components/ProtectedRoute";
import Alerts from "./components/Alerts"
import CreditSimulation from "./components/CreditSimulation";
import PersonalizedPlain from "./components/PersonalizedPlan"
import Transaction from "./components/Transaction"
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <div>
      <Navbar  class="m-0px"/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/monitoring" element={<ProtectedRoute><CreditMonitoring /></ProtectedRoute>} />
        <Route path="/alerts" element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
        <Route path="/simulation" element={<ProtectedRoute><CreditSimulation /></ProtectedRoute>} />
        <Route path="/plan" element={<ProtectedRoute><PersonalizedPlain /></ProtectedRoute>} />
        <Route path="/transaction" element={<ProtectedRoute><Transaction /></ProtectedRoute>} />

      </Routes>
    </div>
  );
};

export default App;
