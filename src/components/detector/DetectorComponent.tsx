import { mediaPineFaceMesh } from "../mediaPipe/MediaPineFaceMesh";
import { mediaPineHandDetect } from "../mediaPipe/MediaPineHandDetect";
import MashComponent from "../webcam/MashComponent";
import WebCamComponent from "../webcam/WebcamComponent";

const DetectorComponent: React.FC = () => {
  // const [webcamRef, canvasRef] = mediaPineFaceMesh();
  const [webcamRef, canvasRef] = mediaPineHandDetect();
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
