import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
  HAND_CONNECTIONS,
  NormalizedLandmarkListList,
  Results,
} from "@mediapipe/hands";

/**
 * Draw canvas
 * @param ctx canvas context
 * @param results Hand detection results
 */
export const drawCanvas = (ctx: CanvasRenderingContext2D, results: Results) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.scale(-1, 1);
  ctx.translate(-width, 0);
  ctx.drawImage(results.image, 0, 0, width, height);
  // Draw hand
  if (results.multiHandLandmarks) {
    // Draw frames
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 1,
      });
      drawLandmarks(ctx, landmarks, {
        color: "#FF0000",
        lineWidth: 1,
        radius: 2,
      });
    }
    // Draw circle
    drawCircle(ctx, results.multiHandLandmarks);
  }
  ctx.restore();
};

/**
 * Draw a circle between the tip of the index finger and the tip of the forefinger
 * @param ctx
 * @param handLandmarks
 */
const drawCircle = (
  ctx: CanvasRenderingContext2D,
  handLandmarks: NormalizedLandmarkListList
) => {
  if (handLandmarks.length > 0 && handLandmarks[0].length > 8) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const [x1, y1, z1] = [
      handLandmarks[0][8].x * width,
      handLandmarks[0][8].y * height,
      handLandmarks[0][8].z * width,
    ];
    const [x2, y2, z2] = [
      handLandmarks[0][4].x * width,
      handLandmarks[0][4].y * height,
      handLandmarks[0][4].z * width,
    ];
    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;
    const r =
      Math.sqrt(
        Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
      ) / 2;

    ctx.strokeStyle = "#0082cf";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.stroke();
  }
};
