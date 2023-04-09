import { mediaPineFaceMesh } from "../mediaPipe/MediaPineFaceMesh";
import MashComponent from "../webcam/MashComponent";
import WebCamComponent from "../webcam/WebcamComponent";

const DetectorComponent: React.FC = () => {
  const [webcamRef, canvasRef] = mediaPineFaceMesh();

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
