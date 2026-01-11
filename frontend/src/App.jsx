import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TrackMonitor from "./pages/TrackMonitor";
import TrafficControlPage from "./pages/TrafficControlPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ActiveIncidents from "./pages/ActiveIncidents";
import EngineeringDashboard from "./pages/EngineeringDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/monitoring" element={ <ProtectedRoute allowedRole="TRACK_MONITOR">
            <TrackMonitor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/traffic-control"
        element={
          <ProtectedRoute allowedRole="TRAFFIC_CONTROL">
            <TrafficControlPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/engineering"
        element={
          <ProtectedRoute allowedRole="ENGINEERING_AUTHORITY">
            <ActiveIncidents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clearance"
        element={
          <ProtectedRoute allowedRole="CLEARANCE_AUTHORITY">
            <EngineeringDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
