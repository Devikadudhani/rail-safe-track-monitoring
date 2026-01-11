const express = require("express");
const axios = require("axios");

const router = express.Router();

// Fetch fused ML decision
router.get("/predict", async (req, res) => {
  try {
    const mlResponse = await axios.post(
      "http://127.0.0.1:8000/fusion/predict"
    );

    res.json([
      {
        id: "INC-" + Date.now(),
        km: mlResponse.data.track_section.replace("KM_", ""),
        anomalyScore: mlResponse.data.sensor_confidence,
        risk: mlResponse.data.final_risk,
        severity: mlResponse.data.final_risk,
        time: "Just now",
        color:
          mlResponse.data.final_risk === "HIGH"
            ? "red"
            : mlResponse.data.final_risk === "MEDIUM"
            ? "yellow"
            : "green",
      },
    ]);
  } catch (err) {
    console.error("ML service error:", err.message);
    res.status(500).json({ message: "ML Service unavailable" });
  }
});

module.exports = router;
