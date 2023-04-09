import { FaceMesh } from "@mediapipe/face_mesh";
import { useRef, useEffect } from "react";
import * as Facemesh from "@mediapipe/face_mesh";
import { drawConnectors } from "@mediapipe/drawing_utils/drawing_utils";
import * as cam from "@mediapipe/camera_utils";
import { MAX_NUM_FACE_MESH } from "../../constants/app.constant";
export const mediaPineFaceMesh = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = drawConnectors;
  let camera = null;
  function onResults(results: any) {
    if (canvasRef.current == null) return;
    if (webcamRef.current == null) return;
    const video = webcamRef.current["video"];
    const videoWidth = video["videoWidth"];
    const videoHeight = video["videoHeight"];
    canvasRef.current["width"] = videoWidth;
    canvasRef.current["height"] = videoHeight;
    const canvasElement = canvasRef.current as HTMLCanvasElement;
    if (canvasElement != null) {
      const canvasCtx = canvasElement.getContext("2d");
      if (canvasCtx == null) return;
      canvasCtx.save();
      canvasCtx.clearRect(
        0,
        0,
        canvasElement["width"],
        canvasElement["height"]
      );
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement["width"],
        canvasElement["height"]
      );
      if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
            color: "#C0C0C070",
            lineWidth: 1,
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
            color: "#FF3030",
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
            color: "#FF3030",
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
            color: "#30FF30",
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
            color: "#30FF30",
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
            color: "#E0E0E0",
          });
          connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
            color: "#E0E0E0",
          });
        }
      }
      canvasCtx.restore();
    }
  }
  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: MAX_NUM_FACE_MESH,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current["video"], {
        onFrame: async () => {
          if (webcamRef.current == null) return;
          await faceMesh.send({ image: webcamRef.current["video"] });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);
  return [webcamRef, canvasRef];
};
