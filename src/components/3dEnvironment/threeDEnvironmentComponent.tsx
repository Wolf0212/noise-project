import React from "react";

import { Canvas } from "@react-three/fiber";

export const ThreeDEnvironmentComponent: React.FC = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};
