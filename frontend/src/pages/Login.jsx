import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [role, setRole] = useState("Track Monitor");
  const navigate = useNavigate();


  const roles = [
    { title: "Track Monitor", sub: "Detection & First Response" },
    { title: "Traffic Control Authority", sub: "Operational Safety Control" },
    { title: "Engineering Authority", sub: "Technical Assessment" },
    { title: "Clearance Authority", sub: "Final Approval" },
  ];

  return (
    <div className="login-page">
      <div className="login-box">
      <div className="login-header">
 
 <div className="header-row">
    <button
      type="button"
      className="back-btn"
      onClick={() => navigate("/")} >
          <img src="/back.png" alt="Back" />
    </button>
 <div className="login-icon">
    <img src="/train-logo.jpg" alt="RTAM Icon" />
  </div>
    
  </div>
  <h2 className="header-title">RTAM SYSTEM LOGIN</h2>
  <p className="login-subtitle">
    Railway Track Anomaly Monitor
  </p>

  <span className="auth-badge">
    AUTHORIZED ACCESS ONLY
  </span>
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
        <form>
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
            <input type="password" />
          </div>

          <button className="login-btn">SECURE LOGIN</button>
        </form>
      </div>
    </div>
  );
}
