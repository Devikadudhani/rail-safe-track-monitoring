const express = require("express");
const axios = require("axios");

const router = express.Router();

// FINAL ML AGGREGATED ENDPOINT
router.get("/predict", async (req, res) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/fusion/predict"
    );

    // Convert ML output to frontend-friendly alerts
    const ml = response.data;

    const alerts = [
      {
        id: ml.track_section,
        km: "23.4",
        severity: ml.final_risk === "HIGH" ? "CRITICAL" : "NORMAL",
        risk: ml.final_risk,
        anomalyScore: ml.sensor_confidence,
        time: "Just now",
        color: ml.final_risk === "HIGH" ? "red" : "green",
      },
    ];

    res.json(alerts);
  } catch (error) {
    console.error("ML Service error:", error.message);
    res.status(500).json({ error: "ML Service unavailable" });
  }
});

module.exports = router;
