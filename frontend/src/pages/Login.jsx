import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("Track Monitor");
  const [password, setPassword] = useState("");
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
          <div className="row">
            <div className="form-group">
              <label>State</label>
              <select>
                <option>Delhi</option>
              </select>
            </div>

            <div className="form-group">
              <label>City</label>
              <select>
                <option>Delhi</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Station</label>
            <input type="text" />
          </div>

          {role === "Track Monitor" && (
            <div className="form-group">
              <label>Track / Section</label>
              <input type="text" />
            </div>
          )}

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            SECURE LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
