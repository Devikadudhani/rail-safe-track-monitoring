import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


export default function Login() {
  const [role, setRole] = useState("Track Monitor");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const roles = [
    { title: "Track Monitor", sub: "Detection & First Response" },
    { title: "Traffic Control Authority", sub: "Operational Safety Control" },
    { title: "Engineering Authority", sub: "Technical Assessment" },
    { title: "Clearance Authority", sub: "Final Approval" },
  ];

  const ROLE_MAP = {
    "Track Monitor": "TRACK_MONITOR",
    "Traffic Control Authority": "TRAFFIC_CONTROL",
    "Engineering Authority": "ENGINEERING_AUTHORITY",
    "Clearance Authority": "CLEARANCE_AUTHORITY",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: ROLE_MAP[role],
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "TRACK_MONITOR") navigate("/monitoring");
      else if (data.role === "TRAFFIC_CONTROL") navigate("/traffic-control");
      else if (data.role === "ENGINEERING_AUTHORITY") navigate("/engineering");
      else if (data.role === "CLEARANCE_AUTHORITY") navigate("/clearance");

    } catch (err) {
      alert("Server not reachable");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-header">
          <div className="header-row">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
            >
              <img src="/back.png" alt="Back" />
            </button>

            <div className="login-icon">
              <img src="/train-logo.jpg" alt="RTAM Icon" />
            </div>
          </div>

          <h2 className="header-title">RTAM SYSTEM LOGIN</h2>
          <p className="login-subtitle">Railway Track Anomaly Monitor</p>
          <span className="auth-badge">AUTHORIZED ACCESS ONLY</span>
        </div>

        <div className="section-divider">
          <p className="section-label">SELECT ACCESS ROLE</p>
        </div>

        <div className="roles">
          {roles.map((r) => (
            <div
              key={r.title}
              className={`role-card ${role === r.title ? "active" : ""}`}
              onClick={() => setRole(r.title)}
            >
              <div className="role-title">{r.title}</div>
              <div className="role-sub">{r.sub}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleLogin}>
          {/* ZONE (common for all) */}
<div className="row">
  <div className="form-group">
    <label>Zone</label>
    <select>
      <option>Northern Railway (Delhi Division)</option>
    </select>
  </div>
</div>

{/* TRAFFIC CONTROL → STATION */}
{role === "Traffic Control Authority" && (
  <div className="row">
    <div className="form-group">
      <label>Station</label>
      <select>
        <option>New Delhi (NDLS)</option>
        <option>Ghaziabad (GZB)</option>
        <option>Delhi Shahdara (DSA)</option>
      </select>
    </div>
  </div>
)}

{/* ALL OTHER ROLES */}
{role !== "Traffic Control Authority" && (
  <>
    <div className="row">
      <div className="form-group">
        <label>Route</label>
        <select>
          <option>Delhi–Ghaziabad</option>
        </select>
      </div>
    </div>

    <div className="row">
      <div className="form-group">
        <label>Line</label>
        <select>
          <option>UP</option>
          <option>DN</option>
          <option>UP2</option>
          <option>DN2</option>
          <option>YARD</option>
          <option>SID</option>
        </select>
      </div>

      <div className="form-group">
        <label>Segment Name</label>
        <select>
          <option>NR-DLI-DLI-GZB-UP-KM0012-S001</option>
          <option>NR-DLI-DLI-GZB-UP-KM0012-S002</option>
          <option>NR-DLI-DLI-GZB-DN-KM0012-S001</option>
          <option>NR-DLI-DLI-GZB-DN-KM0012-S002</option>
        </select>
      </div>
    </div>
  </>
)}

         <div className="form-group" style={{ position: "relative" }}>
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#555",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>

          </div>



          <button type="submit" className="login-btn">
            SECURE LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
