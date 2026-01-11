def fuse_results(sensor, camera):
    risk = "HIGH" if sensor["risk"] == "HIGH" or camera["tampering"] else "LOW"

    return {
        "track_section": sensor["track_section"],
        "final_risk": risk,
        "sensor_confidence": sensor["confidence"],
        "camera_confidence": camera["confidence"],
        "decision": "ESCALATE" if risk == "HIGH" else "MONITOR"
    }
