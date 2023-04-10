import { useRef, useEffect, useCallback } from "react";
import { POSE_CONNECTIONS, Pose, Results } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import {
  CAMERA_HEIGHT,
  CAMERA_WIDTH,
  MIN_DETECTION_CONFIDENT,
  POSE_MODEL_COMPLEXITY,
} from "../../constants/app.constant";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
export const mediaPinePose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef<Results>();
  let camera = null;
  const onResults = useCallback((results: Results) => {
    if (!results.poseLandmarks) {
      return;
    }
    if (canvasRef.current == null) return;
    if (webcamRef.current == null) return;
    const video = webcamRef.current["video"];
    const videoWidth = video["videoWidth"];
    const videoHeight = video["videoHeight"];
    canvasRef.current["width"] = videoWidth;
    canvasRef.current["height"] = videoHeight;
    resultsRef.current = results;

    if (canvasRef.current == null) return;
    const canvasElement = canvasRef.current as HTMLCanvasElement;
    const canvasCtx = canvasElement.getContext("2d")!;
    if (canvasCtx == null) return;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.segmentationMask,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = "source-in";
    canvasCtx.fillStyle = "#00FF00";
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = "destination-atop";
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.globalCompositeOperation = "source-over";
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 4,
    });
    drawLandmarks(canvasCtx, results.poseLandmarks, {
      color: "#FF0000",
      lineWidth: 2,
    });
    canvasCtx.restore();
  }, []);
  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });
    pose.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    pose.onResults(onResults);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current["video"], {
        onFrame: async () => {
          if (webcamRef.current == null) return;
          await pose.send({ image: webcamRef.current["video"] });
        },
        width: CAMERA_WIDTH,
        height: CAMERA_HEIGHT,
      });
      camera.start();
    }
  }, [onResults]);
  return [webcamRef, canvasRef];
};
