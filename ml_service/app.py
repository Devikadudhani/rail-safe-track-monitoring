from fastapi import FastAPI
from sensor_model import run_sensor_model
from camera_model import run_camera_model
from fusion import fuse_results

app = FastAPI()

@app.get("/")
def root():
    return {"status": "ML Service Running"}

@app.post("/sensor/predict")
def sensor_predict():
    result = run_sensor_model()
    return result

@app.post("/camera/predict")
def camera_predict():
    result = run_camera_model()
    return result

@app.post("/fusion/predict")
def fusion_predict():
    sensor = run_sensor_model()
    camera = run_camera_model()
    fused = fuse_results(sensor, camera)
    return fused
