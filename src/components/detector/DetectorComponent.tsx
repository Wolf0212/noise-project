import { mediaPineFaceMesh } from "../mediaPipe/MediaPineFaceMesh";
import { mediaPineHandDetect } from "../mediaPipe/MediaPineHandDetect";
import { mediaPinePose } from "../mediaPipe/MediaPinePose";
import MashComponent from "../webcam/MashComponent";
import WebCamComponent from "../webcam/WebcamComponent";

const DetectorComponent: React.FC = () => {
  const [webcamRef, canvasRef] = mediaPineFaceMesh();
  // const [webcamRef, canvasRef] = mediaPineHandDetect();
  // const [webcamRef, canvasRef] = mediaPinePose();
  return (
    <>
      <center>
        <div className="App">
          <WebCamComponent webcamRef={webcamRef} />
          <MashComponent canvasRef={canvasRef} />
        </div>
      </center>
    </>
  );
};
export default DetectorComponent;
