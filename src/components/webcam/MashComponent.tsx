import { cameraConfig } from "./Webcam.config";
interface MashComponentProps {
  canvasRef: any;
}
const MashComponent = (props: MashComponentProps) => {
  const canvasRef = props.canvasRef;
  return (
    <canvas
      ref={canvasRef}
      className="output_canvas"
      style={cameraConfig}
    ></canvas>
  );
};
export default MashComponent;
