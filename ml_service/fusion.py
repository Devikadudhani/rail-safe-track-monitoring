def fuse(sensor, camera):
    if sensor["risk_level"] == "HIGH" and "tool" in camera["objects"]:
        return "CRITICAL"
    if sensor["risk_level"] == "HIGH":
        return "MEDIUM"
    return "LOW"
