import { useRef, useEffect, useCallback } from "react";
import { Hands, Results } from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import {
  CAMERA_HEIGHT,
  CAMERA_WIDTH,
  HAND_MODEL_COMPLEXITY,
  MAX_NUM_HAND_DETECT,
  MIN_DETECTION_CONFIDENT,
  MIN_TRACKING_CONFIDENT,
} from "../../constants/app.constant";
import { drawCanvas } from "./utils/drawCanvas";
export const mediaPineHandDetect = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef<Results>();
  let camera = null;
  const onResults = useCallback((results: Results) => {
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
    drawCanvas(canvasCtx, results);
    console.log(results);
    if (canvasCtx == null) return;
  }, []);
  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: MAX_NUM_HAND_DETECT,
      modelComplexity: HAND_MODEL_COMPLEXITY,
      minDetectionConfidence: MIN_DETECTION_CONFIDENT,
      minTrackingConfidence: MIN_TRACKING_CONFIDENT,
    });

    hands.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current["video"], {
        onFrame: async () => {
          if (webcamRef.current == null) return;
          await hands.send({ image: webcamRef.current["video"] });
        },
        width: CAMERA_WIDTH,
        height: CAMERA_HEIGHT,
      });
      camera.start();
    }
  }, [onResults]);
  return [webcamRef, canvasRef];
};
