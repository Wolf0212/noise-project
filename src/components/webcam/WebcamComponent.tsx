import Webcam from "react-webcam";
import { cameraConfig } from "./Webcam.config";
interface WebCamComponentProps {
  webcamRef: any;
}
const WebCamComponent = (props: WebCamComponentProps) => {
  const webcamRef = props.webcamRef;
  return <Webcam ref={webcamRef} style={cameraConfig} />;
};
export default WebCamComponent;
