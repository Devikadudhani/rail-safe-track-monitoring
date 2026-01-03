// import LandingPage from "./pages/LandingPage";

// export default function App() {
//   return <LandingPage />;
// }

import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TrackMonitor from "./pages/TrackMonitor";
import TrafficControlPage from "./pages/TrafficControlPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/monitoring" element={<TrackMonitor />} />
      <Route path="/traffic-control" element={<TrafficControlPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

